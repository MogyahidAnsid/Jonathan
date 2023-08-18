import Profile from '../assets/profile.avif'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1 className='font-bold text-3xl uppercase mb-10'>Personal Information</h1>
      <div className="flex items-start space-x-5">
        <img src={Profile} alt="Proflie" className='w-60' />
        <div className=''>
          <h1 className='font-bold text-2xl'>Jonathan Phinma</h1>
          <p className='text-lg mt-1'>Web Developer</p>

          <Link to='https://blog.webdevsimplified.com/2022-07/react-router/'
            className='flex items-center space-x-2 hover:underline mt-2'
            target='_blank'
            rel='noreferrer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                    <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" />
                    <path d="M9 20.027c-3 .973-5.5 0-7-3" /></g>
                </svg>
            <h2>Visit my Github</h2>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home