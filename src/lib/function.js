/** @format */

import axios from 'axios'
import crypto from 'crypto'
const pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ23456789'

const fetchJson = async (url, options) => {
  try {
    options = options || {}
    const res = await axios({
      method: 'GET',
      url,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
      },
      ...options,
    })
    return res.data
  } catch (err) {
    return err
  }
}

const getBuffer = async (url, options) => {
  try {
    options = options || {}
    const res = await axios({
      method: 'get',
      url,
      headers: {
        DNT: 1,
        'Upgrade-Insecure-Request': 1,
      },
      ...options,
      responseType: 'arraybuffer',
    })
    return res.data
  } catch (e) {
    console.log(`Error : ${e}`)
  }
}

const randomText = len => {
  const result = []
  for (let i = 0; i < len; i++) {
    result.push(pool[Math.floor(Math.random() * pool.length)])
  }
  return result.join('')
}

const getHashedPassword = password => {
  const sha256 = crypto.createHash('sha256')
  const hash = sha256.update(password).digest('base64')
  return hash
}

const pickRandom = array => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

export { randomText, getHashedPassword, fetchJson, getBuffer, pickRandom }
