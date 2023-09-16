import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='mx-auto grid max-w-5xl grid-cols-3 grid-rows-3 gap-1 p-1'>
        <div className='col-span-3 flex items-center justify-center rounded-lg bg-sky-500 text-center text-white'>H</div>
        <div className='rounded-lg bg-sky-500 py-3 text-center text-white'>1</div>
        <div className='rounded-lg bg-sky-500 py-3 text-center text-white'>2</div>
        <div className='rounded-lg bg-sky-500 py-3 text-center text-white'>3</div>
        <div className='rounded-lg bg-sky-500 py-3 text-center text-white'>4</div>
        <div className='rounded-lg bg-sky-500 py-3 text-center text-white'>5</div>
        <div className='rounded-lg bg-sky-500 py-3 text-center text-white'>6</div>
      </div>
    </div>
  )
}
