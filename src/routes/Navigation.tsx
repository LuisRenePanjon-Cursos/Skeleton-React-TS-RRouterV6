import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyloadModule/pages';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt={'Logo de React'} width={150} height={150}/>
          <ul>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/lazy2'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/lazy3'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<LazyPage1 />} />
          <Route path='Lazy2' element={<LazyPage2 />} />
          <Route path='Lazy3' element={<LazyPage3 />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
