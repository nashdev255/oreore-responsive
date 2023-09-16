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
        <div className='col-span-3 flex justify-center rounded-lg bg-sky-500 py-3 text-white'>
          <div className='space-y-4'>
            <h1 className='text-xl'>Title</h1>
            <div className='flex space-x-4'>
              <div className='h-14 w-14 bg-white' />
              <div>
                <h2 className='text-lg'>name : nash</h2>
                <p>FrontEnd Developer</p>
              </div>
            </div>
            <p>contentcontentcontentcontentcontent</p>
          </div>
        </div>
        <div className='col-span-3 rounded-lg bg-sky-500 py-3 text-center text-white'>F</div>
      </div>
    </div>
  )
}
