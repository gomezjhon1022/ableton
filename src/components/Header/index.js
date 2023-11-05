import { useState } from 'react';
import './Header.scss';

function Header(){
  const [isExpanded, setIsExpanded] =useState(false);
  const handleMenu=()=>{
    setIsExpanded(!isExpanded);
  }
return (
  <header className={`header ${isExpanded===true?'is-expanded':''}`}>
    <div className='header--wrapper'>
      <nav className='header__nav'>
        <a className='header__logo'></a>
        <button className='header--trigger-label' onClick={()=>handleMenu()}>Menu</button>
        <div className={`header__primary-wrapper ${isExpanded?'':'hidden'}`}>
          <ul className='header__nav-links'>
            links
          </ul>
        </div>
      </nav>
    </div>
  </header>
)
}
export { Header }