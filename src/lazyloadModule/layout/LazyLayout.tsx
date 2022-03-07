import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const LazyLayout = () => {
    return (
        <div>
            Lazy Layout Page
            {/* <Outlet /> */}
            {/* Rutas hijas  ↓↓↓ */}
            <ul>
                <li>
                    <NavLink to='lazy1'> Page1</NavLink>
                </li>
                <li>
                    <NavLink to='lazy2'> Page2</NavLink>
                </li>
                <li>
                    <NavLink to='lazy3'> Page3</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path='lazy1' element={<LazyPage1 />} />
                <Route path='lazy2' element={<LazyPage2 />} />
                <Route path='lazy3' element={<LazyPage3 />} />
                <Route path='*' element={<LazyPage1 />} />
            </Routes>

        </div>
    );
};

export default LazyLayout;
