import React from 'react'
import ListProduct from '../components/ListProduct';
import { ProductType } from '../types/product'

type Props = {
  data: ProductType[];
}

const Home = (props: Props) => {
  return (
    < ListProduct data= {props.data} />
  )
}

export default Home