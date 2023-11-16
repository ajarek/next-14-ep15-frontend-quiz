'use client'
import Loading from '@/components/Loading'
import useFetch from '@/lib/getQuiz'

const Home = () => {
  const { data, pending, error } = useFetch('data.json')
  if (pending) {
    return <Loading/>
  }

  if (error) {
    return <p>Error: {error}</p>
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {data &&
        [...data.quizzes].map((el: any, index) => (
          <p key={index}>{el.title}</p>
        ))}
    </main>
  )
}

export default Home
