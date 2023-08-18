import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <header className='flex items-center justify-between text-xl py-7'>
                <Link to="/" className='font-semibold'>Jonathan.</Link>

                <nav className='space-x-10'>
                    <Link to="/">Home</Link>
                    <Link to="/work">Work</Link>
                    <Link to="/education">Education</Link>
                </nav>
            </header>
        </>
    )
}
