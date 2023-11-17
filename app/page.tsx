'use client'
import { ButtonLink } from '@/components/ButtonLink'
import Loading from '@/components/Loading'
import useFetch from '@/lib/getQuiz'

const Home = () => {
  const { data, pending, error } = useFetch('data.json')
  
  if (pending) {
    return <Loading />
  }

  if (error) {
    return <p>Error: {error}</p>
  }
  return (
    <main className=' min-h-screen -mt-20  p-24 grid grid-cols-2 place-items-center  '>
      <div className='w-full flex flex-col items-start '>
        <h1  className='text-6xl'>Welcome to the</h1>
        <h2 className='text-6xl font-bold '>Frontend Quiz!</h2>
        <p className='mt-8 text-xl italic'>Pick a subject to get started.</p>
      </div>
      <div  className='w-full flex flex-col items-center gap-4 justify-center '>
        {data &&
          [...data.quizzes].map((el: any, index) => (
            <ButtonLink key={index} title={el.title} src={el.icon} />
          
          ))}
      </div>
    </main>
  )
}

export default Home
