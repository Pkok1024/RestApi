/** @format */

import formatDate from './formatDate.js'
export default function searchParser(data) {
  const root = data?.resource_response
  const results = root?.data?.results
  const bookmark = data?.resource?.options?.bookmarks[0]
  const array = []

  results.map((response, index, _) => {
    const imageURL = response?.images?.orig?.url
    const title = response?.title ? response.grid_title : response?.title
    const id = response?.id
    const date = response?.created_at
    const type = response?.type
    const pinner = response?.pinner
    const initialDate = new Date(date)
    const formattedDate = formatDate(initialDate, 'yyyy-MM-dd')

    array.push({
      id,
      title,
      pinner: {
        id: pinner?.id,
        username: pinner?.username,
        fullName: pinner?.full_name,
        avatarURL: pinner?.image_medium_url,
        followers: pinner?.follower_count,
      },
      date: {
        formatted: formattedDate,
        initial: date,
      },
      type,
      imageURL,
    })
  })

  return {
    bookmark,
    response: array,
  }
}
