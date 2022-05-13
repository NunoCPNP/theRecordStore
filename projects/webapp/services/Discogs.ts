import axios from 'axios'

const token = process.env.NEXT_PUBLIC_DISCOGS_TOKEN

type Search = {
  query: string
  title: string
  year: string
  label: string
  coutry: string
  format: string
  type: string
}

export const recordSearch = async (search: Search) => {
  const response = await axios.get(
    `https://api.discogs.com/database/search?q=${search.query}}&token=${token}&title=${search.title}&year=${search.year}&format=${search.format}&country=${search.country}`,
  )

  return response.data.results
}
