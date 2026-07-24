import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Searchbar from './Searchbar';
import ThemeButton from './ThemeButton';


function Navbar() {
    const navigate = useNavigate();
    const navLinkClasses = ({ isActive }) =>
        `transition-colors duration-200 ${
            isActive
            ? "text-[var(--primary)] font-semibold"
            : "text-[var(--text)] hover:text-[var(--primary)]"
        }`;

  return (
    <>
        <nav className="sticky top-0 z-500 border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md">
            <div className='mx-auto flex h-18 max-w-7xl items-center justify-between px-6'>
                <h1 className='text-2xl font-bold text-[var(--primary)] cursor-pointer'
                    onClick={() => navigate('/')}
                >
                    Tourify
                </h1>
                <ul className='flex items-center gap-8'>

                        <li>
                            <NavLink to="/" className={navLinkClasses}>
                                Home
                            </NavLink>
                        </li>
                    
                    <li>
                        <NavLink to="/tours" className={navLinkClasses}>
                            Tours
                        </NavLink>
                        </li>
                    <li>
                        <NavLink to="/about" className={navLinkClasses}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={navLinkClasses}>
                           Contact
                        </NavLink>
                    </li>
                   <li>
                        <ThemeButton />
                   </li>

                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar