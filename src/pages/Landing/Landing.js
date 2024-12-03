import React from 'react'
import Layout from '../Layout/Layout'
import CarouselEffect from '../../Componenets/Carousel/CarouselEffect';
import Category from '../../Componenets/Category/Category';
import Product from '../../Componenets/Product/Product';


function Landing() {
  return (
    <Layout>
        <CarouselEffect />
        <Category />
        <Product />
    </Layout>
  );
}

export default Landing