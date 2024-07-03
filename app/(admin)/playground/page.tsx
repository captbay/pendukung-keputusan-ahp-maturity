"use client"
import React, { useEffect } from 'react'

export default function Playground() {

  useEffect(() => {
    // RUN FUNCTION HERE
    console.log('Playground page loaded');
  }, []);
  return (
    <div className="flex min-h-screen justify-center items-center">
      <h1 className='text-4xl font-bold'>Playground</h1>
    </div>
  )
}