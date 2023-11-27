'use client'
import { ButtonLink } from '@/components/ButtonLink'
import Loading from '@/components/Loading'
import useFetch from '@/lib/getQuiz'
import { useState } from 'react'
import Image from 'next/image'
const JavaScript = () => {
  const { data, pending, error } = useFetch('data.json')
  const [numberQuestion, setNumberQuestion] = useState(0)
  const [letters, setLetters] = useState(['A', 'B', 'C', 'D'])
  const [collectedAnswers, setCollectedAnswers] = useState<boolean[]>([])
  const result=collectedAnswers.filter(el=>el===true)
  if (pending) {
    return <Loading />
  }

  if (error) {
    return <p>Error: {error}</p>
  }
  const dataHtml = [...data.quizzes].find((el: any) => el.title === 'JavaScript')

  const { questions, icon } = dataHtml
  const { question, options, answer } = questions[numberQuestion]

 const handleSubmit=(e:any)=>{
  e.preventDefault()
  const ok=[...e.target].filter(el=>el.checked===true)
  if(ok[0].value===answer){
    collectedAnswers.length>=10?setCollectedAnswers([...collectedAnswers]):setCollectedAnswers([...collectedAnswers,true])
  }
  else{
    setCollectedAnswers([...collectedAnswers,false])
  }
 
  numberQuestion===9?setNumberQuestion(9):setNumberQuestion(numberQuestion+1)
 }

  return (
    <main className=' min-h-screen -mt-20  p-24 grid grid-cols-2 place-items-center max-[800px]:grid-cols-1 max-[800px]:px-4  '>
      <div className='w-full flex flex-col items-start '>
        <h1 className=' flex text-4xl max-[800px]:text-2xl'>
          <Image
            src={icon}
            alt={'icon '}
            width={50}
            height={50}
            className='mr-4'
          />
          JavaScript
          
        </h1>
        <p className='mt-8 text-xl italic'>
          Question {numberQuestion + 1} of {questions.length}
        </p>
        <h2 className='text-4xl font-bold max-[800px]:text-2xl '>{question}</h2>
        <h3 className='text-2xl '>Your Points: {result.length}</h3>
      </div>
      <form onSubmit={handleSubmit} className='w-full min-h-full flex flex-col items-center gap-8 justify-center border p-4'>
        {options.map((el: string, index: number) => (
          <div
            className='w-full flex justify-start items-center text-2xl '
            key={index}
          >
            <input
              type='radio'
              name='radio'
              value={el}
              id={letters[index]}
              className='w-6 h-6'
              required
            />
            <label
              htmlFor={letters[index]}
              className='ml-4 text-4xl'
            >
              <span className=''>{letters[index]} </span>
              <span className='text-2xl'>{el}</span>
            </label>
          </div>
        ))}
       <button className='w-full text-white text-2xl bg-blue-500 p-4 rounded-sm' type="submit">Submit Answer</button>
      </form>
    </main>
  )
}

export default JavaScript
