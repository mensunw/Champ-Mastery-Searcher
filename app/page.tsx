'use client'
import { useEffect } from 'react'
export default function Home() {

  // gets champion masteries of a player given the name an the tag (temporarily under HOME)

  useEffect(() => {
    async function getChampionMasteries() {
      try {
        // gets ID
        const name = "portal"
        const tag = "only2"
        const query1 = new URLSearchParams({ name, tag }).toString();
        const response1 = await fetch(`/api/getPlayerID?${query1}`)

        // if status is not 200, something went wrong
        if (response1.status != 200) {
          const { error } = await response1.json()
          console.log(error)
          throw Error(error)
        }

        // get their id
        const { id } = await response1.json()

        // gets their top 10 champion masteries
        const query2 = new URLSearchParams({ id }).toString();
        const response2 = await fetch(`/api/getChampionMasteries?${query2}`)

        // if status is not 200, something went wrong
        if (response2.status != 200) {
          const { error } = await response2.json()
          console.log(error)
          throw Error(error)
        }

        // get their top 10 champion mastery details
        const { masteryData } = await response2.json()
        console.log(masteryData)
      } catch (e) {
        console.log("Error:", e)
      }
    }

    getChampionMasteries()
  }, [])

  return (
    <>
      hi
    </>
  );
}
