"use client"
import { useEffect, useState } from "react";
import Hero from "../app/components/Hero";
import LoadingPage from "../app/components/LoadingPage"

export default function Home() {

  const [loading, setLoading] =  useState(true)

 useEffect(() => {
    setTimeout(() => {setLoading(false)}, 1500)
  }, [])


  return (
    <>
    {
      loading? <LoadingPage/> : <Hero/>
    }
    
    </>
  );
}
