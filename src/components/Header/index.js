import { useContext, useEffect, useState } from 'react';
import { textHeader } from '../../assets/text/textHeader';
import { useResponsive } from '../../customhooks/useResponsive';
import { AbletonContext } from '../Context';
import './Header.scss';

function Header(){
  const { language } = useContext(AbletonContext);
  const {isDesktop, handleResize}=useResponsive();
  const textList = textHeader[language];
  const [isExpanded, setIsExpanded] =useState(false);
  const [isExpandedButtonMore, setIsExpandedButtonMore]=useState(false);

  const handleMenu=()=>{
    setIsExpanded(!isExpanded);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);

  const handleButtonPlus = () => {
    setIsExpandedButtonMore(!isExpandedButtonMore);
  }
return (
  <header className={`header ${isExpanded===true?'is-expanded':''}`}>
    <div className='header--wrapper'>
      <nav className='header__nav'>
        <a className='header__logo'></a>
        {isDesktop?
            <ul className='header__nav-links-desktop'>
              {textList.header.map((element,index)=>(
                index ===7?
                <li className='header__link-desktop' key={element}>
                  <button className='header__buttonMore' onClick={()=>handleButtonPlus()}>
                    <span>{element}</span>
                    <span className='header__iconPlus' >
                      {!isExpandedButtonMore?
                        <span className='header__iconPlus-expanded'></span>
                        :<span className='header__iconPlus-collapse'></span>
                      }
                    </span>
                  </button>
                </li>
                :
                <li className='header__link-desktop' key={element}><a>{element}</a></li>
                ))}
            </ul>
          :<>
            <button className='header--trigger-label' onClick={()=>handleMenu()}>Menu</button>
            <div className={`header__primary-wrapper ${isExpanded?'':'off-screen'}`}>
              <ul className='header__nav-links'>
                {textList.header.map((element)=>(<li className='header__link' key={element}><a>{element}</a></li>))}
              </ul>
              <div className='header__menuMore-wrapper'>
                <section className='header__menuMoreOn'>
                <h3 className='header__menuMoreOn__title'>{textList.menuMoreOn[0]}</h3>
                <ul className='header__menuMoreOn__link-container'>
                  {textList.menuMoreOn.slice(1).filter((_, index) =>
                    isDesktop? index !==4:index!==5
                  ).map((element)=>(
                          <li className="header__menuMoreOn__link" key={element}><a>{element}</a></li>
                      )
                    )
                  }
                </ul>
                </section>
                <section className='header__menuMoreFrom'>
                  <h3 className='header__menuMoreFrom__title'>{textList.menuMoreFrom[0]}</h3>
                  <div className='header__menuMoreFrom-wraper'>
                    <div className='header__slideable'>
                      <ul className='header__menuMoreFrom-row'>
                        {textList.menuMoreFrom.slice(1).map((element, index)=> (
                          index % 2 === 0 &&(
                              <li key={element} className='header__menuMoreFrom-item'>
                                <a>
                                  <div>
                                    <h4>{textList.menuMoreFrom[index+1]}</h4>
                                    <p>{textList.menuMoreFrom[index+2]}</p>
                                  </div>
                                </a>
                              </li>
                          )
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </>
        }
      </nav>
      {isExpandedButtonMore&&<div className='header__nav-more'>
        <section className='header__nav-more-on'>
          <h3>{textList.menuMoreOn[0]}</h3>
          <ul>
            {textList.menuMoreOn.slice(1).filter((_, index) =>index!==5).map((element)=>(
                          <li className="h" key={element}><a>{element}</a></li>
                      )
                    )
                  }
          </ul>
        </section>
        <section className='header__nav-more-from'>
          <h3>{textList.menuMoreFrom[0]}</h3>
          <div className='header__menuMoreFrom-wraper'>
            <div className='header__slideable'>
              <ul className='header__menuMoreFrom-row'>
                {textList.menuMoreFrom.slice(1).map((element, index)=> (
                  index % 2 === 0 &&(
                      <li key={element} className='header__menuMoreFrom-item'>
                        <a>
                          <div>
                            <h4>{textList.menuMoreFrom[index+1]}</h4>
                            <p>{textList.menuMoreFrom[index+2]}</p>
                          </div>
                        </a>
                      </li>
                  )
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>}
      <div className='header__nav-separator'></div>
      <nav className='header__nav-secondary'>
        <ul>
          {textList.menuMoreOn.slice(6).map((element)=> <li key={element}><a>{element}</a></li>)}
        </ul>
      </nav>
    </div>
  </header>
)
}
export { Header }