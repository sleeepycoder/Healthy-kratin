import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Slider  from '../components/ImageSliderHomePage/Slider'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  return (
   <React.Fragment>
<Slider/>
<Footer/>
   </React.Fragment>
  )
}

export default HomePage