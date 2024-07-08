import React from 'react'
import Welcome from '../Components/Welcome/Welcome'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Collection from '../Components/Collection/Collection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

export const Home = () => {
  return (
    <div>
      <Welcome/>
      <Popular/>
      <Offers/>
      <Collection/>
      <NewsLetter/>
    </div>
  )
}
export default Home
