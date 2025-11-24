import { useParams } from 'next/navigation'
import React from 'react'

function page() {
    const [id] = useParams;
  return (
    <>
    <h1>Hello</h1>
    </>
  )
}

export default page