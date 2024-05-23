/** @format */

import axios from 'axios'
/**
 * @function blackbox - sends a prompt to blackbox and returns the response
 * @param {String} prompt - prompt to be sent to blackbox
 * @param {Boolean} web_search - set to true if you want to use web search. By default it is set to false.
 * @returns
 */
const blackbox = async (
  prompt,
  web_search = false
) => {
  const body = {
    messages: [
      {
        content: prompt,
        role: 'user',
      },
    ],
    previewToken: null,
    codeModelMode: true,
    agentMode: {},
    trendingAgentMode: {},
    isMicMode: false,
    isChromeExt: false,
    githubToken: null,
    webSearchMode: web_search,
  }

  const url = 'https://www.blackbox.ai/api/chat'

  const response = await axios.post(url, body)

  return response.data
}

export default blackbox
