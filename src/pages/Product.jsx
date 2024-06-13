import React from 'react'
import GetProduct from '../components/organisme/Product/GetProduct'
import Header from '../components/organisme/Header/Header'
import Footer from '../components/organisme/Footer/Footer'
import BackToTop from '../components/atoms/Button/BackToTop'

export default function Product() {
  return (
    <section>
        <Header/>
        <GetProduct/>
        <BackToTop/>
        <Footer/>
    </section>
  )
}
