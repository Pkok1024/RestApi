/**
 * eslint-disable no-case-declarations
 *
 * @format
 */

import express from 'express'
import axios from 'axios'
import { pixart } from 'gpti'
import {
  fetchJson,
  getBuffer,
} from '../../lib/function.js'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'

const apiRouter = express.Router()
const handleSuccess = (res, data) => {
  res.json({
    status: 'Success',
    code: 200,
    author,
    data,
  })
}
const pixartAsync = async (prompt, data) => {
  try {
    return await new Promise(
      (resolve, reject) => {
        pixart.a(
          {
            prompt,
            data,
          },
          (err, response) => {
            if (err) {
              reject(err)
            } else {
              resolve(response)
            }
          }
        )
      }
    )
  } catch (error) {
    throw new Error(
      'Failed to process Pixart request.'
    )
  }
}

apiRouter.get(
  '/:feature',
  apiKeyMiddleware,
  async (req, res, next) => {
    const { feature } = req.params

    try {
      switch (feature) {
        case 'blackbox':
          const blackboxQuery = req.query.q
          if (!blackboxQuery)
            return res.json({
              error: 'Missing query parameter.',
            })

          const blackboxUrl =
            'https://useblackbox.io/chat-request-v4'
          const blackboxData = {
            textInput: blackboxQuery,
            allMessages: [
              {
                user: blackboxQuery,
              },
            ],
            stream: '',
            clickedContinue: false,
          }
          const blackboxResponse =
            await axios.post(
              blackboxUrl,
              blackboxData
            )
          const blackboxAnswer =
            blackboxResponse.data.response[0][0]
          handleSuccess(res, {
            response: blackboxAnswer,
          })
          break

        case 'Pixart-A':
          const pixartPrompt = req.query.prompt
          const pixartStyle = req.query.style
          const pixartSampler = req.query.sampler
          const pixartWidth = req.query.width
          const pixartHeight = req.query.height
          const pixartData = {
            prompt_negative: '',
            sampler: pixartSampler,
            image_style: pixartStyle,
            width: pixartWidth,
            height: pixartHeight,
            dpm_guidance_scale: 4.5,
            dpm_inference_steps: 14,
            sa_guidance_scale: 3,
            sa_inference_steps: 25,
          }
          const pixartResponse =
            await pixartAsync(
              pixartPrompt,
              pixartData
            )
          if (
            pixartResponse &&
            pixartResponse.images &&
            pixartResponse.images.length > 0
          ) {
            let base64Image =
              pixartResponse.images[0]
            base64Image = base64Image.replace(
              /^data:image\/jpeg;base64,/,
              ''
            )
            res.contentType('image/jpeg')
            res.send(
              Buffer.from(base64Image, 'base64')
            )
          } else {
            return res.json({
              error:
                'No image found in the response.',
            })
          }
          break

        default:
          return res.status(404).json({
            error: 'Invalid feature.',
          })
      }
    } catch (error) {
      next(error)
    }
  }
)

export default apiRouter
