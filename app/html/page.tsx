'use client'
import { ButtonLink } from '@/components/ButtonLink'
import Loading from '@/components/Loading'
import useFetch from '@/lib/getQuiz'
import { useState } from 'react'
import Image from 'next/image'
const Html = () => {
  const { data, pending, error } = useFetch('data.json')
  const [numberQuestion,setNumberQuestion]=useState(0)
  const [letters,setLetters]=useState(['A','B','C','D'])
  
  if (pending) {
    return <Loading />
  }

  if (error) {
    return <p>Error: {error}</p>
  }
  const dataHtml= [...data.quizzes].find((el:any)=>el.title==='HTML')
  console.log(dataHtml);
  const{questions ,icon} =dataHtml
  const {question,options,answer}=questions[numberQuestion]
  return (
    <main className=' min-h-screen -mt-20  p-24 grid grid-cols-2 place-items-center  '>
      <div className='w-full flex flex-col items-start '>
        <h1  className=' flex text-4xl'>
        <Image
        src={icon}
        alt={'icon '}
        width={50}
        height={50}
        className='mr-4'
      />
          HTML
          </h1>
        <p className='mt-8 text-xl italic'>Question {numberQuestion+1} of {questions.length}</p>
        <h2 className='text-4xl font-bold '>{question}</h2>
      </div>
      <div  className='w-full min-h-full flex flex-col items-center gap-8 justify-center border p-4'>
       {options.map((el:string,index:number)=><div className='w-full flex justify-start items-center text-2xl ' key={index}><span className='mr-4 text-4xl'>{letters[index]}</span>{el}</div>
       )}
      </div>
    </main>
  )
}

export default Html