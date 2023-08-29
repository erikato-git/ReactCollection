// db.json - json-server
{
    "superheroes": [
      {
        "id": 1,
        "name": "Batman",
        "alterEgo": "Bruce Wayne"
      },
      {
        "id": 2,
        "name": "Superman",
        "alterEgo": "Clark Kent"
      },
      {
        "id": 3,
        "name": "Wonder Woman",
        "alterEgo": "Princess Diana"
      }
    ]
}


// useSuperHeroData.js

import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

const fetchSuperHero = ({ queryKey }) => {
  // queryKey: ['super-hero','[id]']
  const heroId = queryKey[1]
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSuperHeroData = heroId => {
  const queryClient = useQueryClient()

  return useQuery(['super-hero', heroId], fetchSuperHero, {
    initialData: () => {
      // finds hero in cache if exists
      const hero = queryClient
        .getQueryData('super-heroes')?.data?.find(hero => hero.id === parseInt(heroId))
      if (hero) {
        return { data: hero }
      } else {
        return undefined
      }
    }
  })
}


// RQSuperHeroPage.js

import { useParams } from 'react-router-dom'
import { useSuperHeroData } from '../hooks/useSuperHeroData'

export const RQSuperHeroPage = () => {
  const { heroId } = useParams()
  const { isLoading, data, isError, error } = useSuperHeroData(heroId)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <div>
      {data.data.name} - {data.data.alterEgo}
    </div>
  )
}
