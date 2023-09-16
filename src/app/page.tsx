import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='flex flex-col'>
        <div className='p-1'>
          <div className='rounded-lg bg-sky-500 py-3 text-center text-white'>H</div>
        </div>
        <div className='mx-auto grid max-w-5xl grid-cols-3 gap-1 p-1 pt-0'>
          <div className='rounded-lg bg-sky-500 py-3 text-center text-white'>1</div>
          <div className='rounded-lg bg-sky-500 py-3 text-center text-white'>2</div>
          <div className='rounded-lg bg-sky-500 py-3 text-center text-white'>3</div>
          <div className='rounded-lg bg-sky-500 py-3 text-center text-white'>4</div>
          <div className='rounded-lg bg-sky-500 py-3 text-center text-white'>5</div>
          <div className='rounded-lg bg-sky-500 py-3 text-center text-white'>6</div>
        </div>
      </div>
    </div>
  )
}
