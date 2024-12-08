import React from 'react'

const ForthMain = () => {
  return (
    <div>
        <h1 className='font-bold text-2xl p-10 m-10 my-2 '>
            Reviews
        </h1>
      <div className='p-10 border m-4'>
        <div className='flex items-center gap-5'>
            <span className='w-10'><img className='rounded-full' src="/images/person.png" alt="" /></span>
            <span className='font-bold'>Alex Stanton</span>
        </div>
        <p>
        We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
        </p>
      </div>
      <div className='p-10 border m-4'>
        <div className='flex items-center gap-5'>
            <span className='w-10'><img className='rounded-full' src="/images/person.png" alt="" /></span>
            <span className='font-bold'>Alex Stanton</span>
        </div>
        <p>
        We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
        </p>
      </div>
    </div>
  )
}

export default ForthMain
