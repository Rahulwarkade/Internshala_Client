'use client'
import React from 'react'
import { store } from '@/store/store.js'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wraper = ({children}) => {
  return (
    <>
        <Provider store={store}>
          {children}
          <ToastContainer />
        </Provider>
    </>
  )
}

export default Wraper