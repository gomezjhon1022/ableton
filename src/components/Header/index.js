import './Header.scss';

function Header(){
return (
  <header className="header">
    <div className='header--wrapper'>
      <nav className='header__nav'>
        <a className='header__logo'></a>
        <button className='header--trigger-label'>Menu</button>
        <div className='header__nav-links hidden'>
          links 1  2   3   4   5  6   7   8  9  10
        </div>
      </nav>
    </div>
  </header>
)
}
export { Header }