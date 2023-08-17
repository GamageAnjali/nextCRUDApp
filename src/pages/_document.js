import React from 'react'
import { Html, Head, Main, NextScript} from 'next/document'
import Login from '@/components/Login'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Login />
       <Main />
        <NextScript />
   
      </body>
    </Html>
  )
}
