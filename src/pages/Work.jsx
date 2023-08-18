import React from 'react'

export default function Work() {
    return (
        <>
            <h1 className='font-bold text-3xl uppercase mb-5'>Recent Projects</h1>
            <div className='grid grid-cols-3 gap-5'>
                <div className='border'>
                    <img className='w-full h-72 object-cover' src="https://stastic.ui4free.com/public/images/free-responsive-fitnessgym-html-css-template_1675153165.jpg" alt="" />
                    
                    <div className='p-5 text-center'>
                        <h1 className='text-2xl font-bold uppercase'>FitPhysique</h1>
                        <p className='mt-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Minima voluptate a sunt ullam eaque aliquam?
                            Quibusdam asperiores quaerat, nobis, deleniti obcaecati quo est, architecto atque in nemo pariatur impedit hic.
                        </p>
                    </div>
                </div>
                <div className='border'>
                    <img className='w-full h-72 object-cover' src="https://stastic.ui4free.com/public/images/free-travel-design-template-figma-resource_1673578988.jpg" alt="" />
                    
                    <div className='p-5 text-center'>
                        <h1 className='text-2xl font-bold uppercase'>2rism</h1>
                        <p className='mt-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Minima voluptate a sunt ullam eaque aliquam?
                            Quibusdam asperiores quaerat, nobis, deleniti obcaecati quo est, architecto atque in nemo pariatur impedit hic.
                        </p>
                    </div>
                </div>
                <div className='border'>
                    <img className='w-full h-72 object-cover' src="https://stastic.ui4free.com/public/images/workout-app-figma-mobile-template_1673840251.jpg" alt="" />
                    
                    <div className='p-5 text-center'>
                        <h1 className='text-2xl font-bold uppercase'>Workout App</h1>
                        <p className='mt-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Minima voluptate a sunt ullam eaque aliquam?
                            Quibusdam asperiores quaerat, nobis, deleniti obcaecati quo est, architecto atque in nemo pariatur impedit hic.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
