import { useEffect, useState } from 'react';
import { textHeader } from '../../assets/text/textHeader';
import './Header.scss';

function Header(){
  const [language, setLanguage]=useState('es');
  const textList = textHeader[language];
  console.log(textList);
  console.log(textList.header)
  const [isExpanded, setIsExpanded] =useState(false);
  const [isDesktop, setIsDesktop]=useState(false);

  const handleMenu=()=>{
    setIsExpanded(!isExpanded);
  }

  const handleResize = () => {
    setIsDesktop(window.innerWidth>1279);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);
return (
  <header className={`header ${isExpanded===true?'is-expanded':''}`}>
    <div className='header--wrapper'>
      <nav className='header__nav'>
        <a className='header__logo'></a>
        {isDesktop?
            <ul className='header__nav-links'>
              {textList.header.map((element)=>(<li className='header__link' key={element}><a>{element}</a></li>))}
            </ul>
          :<>
            <button className='header--trigger-label' onClick={()=>handleMenu()}>Menu</button>
            <div className={`header__primary-wrapper ${isExpanded?'':'off-screen'}`}>
              <ul className='header__nav-links'>
                {textList.header.map((element)=>(<li className='header__link' key={element}><a>{element}</a></li>))}
              </ul>
            </div>
          </>
        }
        
      </nav>
    </div>
  </header>
)
}
export { Header }