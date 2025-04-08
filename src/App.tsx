import './App.css'
import { useState, useEffect } from 'react'

const LEARN = ['faster', 'better', 'wholesome', 'together']

function App() {
  const [current, setCurrent] = useState<string>(LEARN[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const prevIndex = LEARN.findIndex((p) => p === prev)
        return LEARN[(prevIndex + 1) % 4]
      })
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='h-screen p-8 bg-[#11111A] text-white flex flex-col justify-between cursor-cell font-hack'>
      <div className='flex flex-col gap-y-4'>
        <div className='cursor-crosshair'>
          SumLearn
          <p className='text-sm text-slate-500/80'>Ditch self-paced, learn {current}</p>
        </div>
        <div>
          Stuck with self-paced courses? Need an accountablity buddy? Need your doubts resolved?(Doubts that AI can't solve!) We got you covered, coming soon - better and stronger
        </div>
        <div>
          If you are a educator and struggling with piracy and low completion rates, we have something cooking for you, reach out to us at kamal@sumlearn.com
        </div>
      </div>
      <div className='flex flex-row gap-x-4'>
        <a className='cursor-crosshair'>LinkedIn</a>
        <a className='cursor-crosshair'>Twitter/X</a>
        <a className='cursor-crosshair'>Email</a>
        <a className='cursor-crosshair'>Previous Website</a>
      </div>
    </div>
  )
}

export default App
