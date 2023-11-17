import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
type Props = {
  title: string
  src: string
}

export function ButtonLink({ title, src }: Props) {
  const router = useRouter()
  return (
    <Button
      className='flex justify-start text-2xl font-bold min-w-full min-h-[80px] border border-slate-800 rounded-2xl'
      variant='link'
      onClick={() => router.push(`/${title.toLowerCase()}`)}
    >
      {' '}
      <Image
        src={src}
        alt={'icon '}
        width={50}
        height={50}
        className='mr-4'
      />
      {title}
    </Button>
  )
}
