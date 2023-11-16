'use client'
import useFetch from "@/lib/getQuiz";
import type {Data} from "@/types/data";

export default function Home() {
  const { data } =  useFetch("data.json");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data &&
        [...data.quizzes].map((el, index) => <p key={index}>{el.title}</p>)}
    </main>
  );
}
