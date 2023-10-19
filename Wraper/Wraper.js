'use client'
import React from 'react'
import { store } from '@/store/store.js'
import { Provider } from 'react-redux'
const Wraper = ({children}) => {
  return (
    <>
        <Provider store={store}>{children}</Provider>
    </>
  )
}

export default Wraper