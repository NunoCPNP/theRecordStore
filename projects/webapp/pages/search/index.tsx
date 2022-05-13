import { useState } from 'react'

import { Input, Spinner } from '../../components'

import { recordSearch } from '../../services/Discogs'

const Search = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [search, setSearch] = useState({
    query: '',
    title: '',
    year: '',
    label: '',
    country: '',
    format: 'vinyl',
    type: 'realease',
  })

  return (
    <>
      <div style={{ paddingBottom: '4rem' }}>
        <Input
          name="query"
          label="Query: "
          value={search.query}
          onChange={(e) => setSearch({ ...search, query: e.target.value })}
        />
        <Input
          name="title"
          label="Title: "
          value={search.title}
          onChange={(e) => setSearch({ ...search, title: e.target.value })}
        />
        <Input
          name="year"
          label="Year: "
          value={search.year}
          onChange={(e) => setSearch({ ...search, year: e.target.value })}
        />
        <Input
          name="country"
          label="Country: "
          value={search.country}
          onChange={(e) => setSearch({ ...search, country: e.target.value })}
        />
        <div>
          <button
            onClick={async () => {
              setLoading(true)
              try {
                const response = await recordSearch(search)
                setLoading(false)
                setData(response)
              } catch (error) {
                console.log('ERROR: ', error)

                setLoading(false)
                setError(true)
              }
            }}
          >
            Search
          </button>
        </div>
      </div>
      {!loading ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
          {data &&
            data.map((item) => {
              return (
                <div key={item.id} style={{ paddingBottom: '4rem' }} onClick={() => console.log(item)}>
                  <div>{item.title}</div>
                  <img src={item.thumb} alt="" />
                  <div>{item.catno}</div>
                  <div>{item.type}</div>
                  <div>{item.country}</div>
                </div>
              )
            })}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default Search
