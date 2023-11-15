"use client"
import { useState, useEffect } from 'react'

export default function Home() {

  interface Crate {
    id: string;
    nameCrate: string;
    albums: string;
  }

  const [crates, setCrates] = useState<Array<Crate>>([]);

  useEffect(() => {
    fetch('data.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((res) => res.json())
    .then((resJson) => { const data = resJson.quizzes
      setCrates(data)})
  }, [])

  console.log(crates)

    
 
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<h1>lol</h1>
    </main>
  )
}
