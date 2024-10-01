import React from 'react'
import { useSelector } from 'react-redux';

export default function Basket() {

  const basketData = useSelector((state) => state.basket);
  console.log(basketData)

  return (
    <div>
      fgb      </div>
  )
}
