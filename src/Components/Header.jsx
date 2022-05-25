import React from 'react'
import SearchBox from './SearchBox'
import AboutIconLink from './AboutIconLink'
import { Link } from 'react-router-dom'

function Header({ handleChange, toggleSearch, active }) {

  return (
    <header className={active === true ? 'header active' : 'header'}>
        <SearchBox handleChange={handleChange} toggleSearch={toggleSearch} className={'searchBox '} active={active} />
        <AboutIconLink />
        <Link to='/'>
            <img src='/Images/wch-logo.png' className='wch-logo' alt='logo' title='logo' />
        </Link>
    </header>
  )
}

export default Header