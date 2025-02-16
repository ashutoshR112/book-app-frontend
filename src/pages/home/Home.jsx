import React from 'react'
import Banner from './Banner'
import TopSeller from './TopSeller'
import Recomended from './Recomended'
import News from './News'

function Home() {
  return (
    <div>
    <Banner/>
    <TopSeller/>
    <Recomended/>
    <News/>
    </div>
  )
}

export default Home