import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='p-1 max-w-5xl grid grid-cols-3 gap-1 mx-auto'>
        <div className='py-3 rounded-lg bg-sky-500 text-white text-center'>A</div>
        <div className='py-3 rounded-lg bg-sky-500 text-white text-center'>B</div>
        <div className='py-3 rounded-lg bg-sky-500 text-white text-center'>C</div>
        <div className='py-3 rounded-lg bg-sky-500 text-white text-center'>D</div>
        <div className='py-3 rounded-lg bg-sky-500 text-white text-center'>E</div>
        <div className='py-3 rounded-lg bg-sky-500 text-white text-center'>F</div>
      </div>
    </div>
  )
}
