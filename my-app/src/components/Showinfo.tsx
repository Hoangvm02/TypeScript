import React from 'react'
import type { ProductType } from '../types/product'

type ShowInfoProps  = {
  name: string,
  children: string
}

const ShowInfo = (props: ShowInfoProps) => {
  return (
    <div>
    Hello...{props.children}
    </div>
  )
}

export default ShowInfo