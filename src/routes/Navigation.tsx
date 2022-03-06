import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate,
} from 'react-router-dom';
import { routes } from './routes';
import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Cargando...</span>} >
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img
                            src={logo}
                            alt={'Logo de React'}
                            width={150}
                            height={150}
                        />
                        <ul>
                            {routes.map(({ to, name }) => (
                                <li key={name}>
                                    <NavLink
                                        to={to}
                                        className={({ isActive }) =>
                                            isActive ? 'nav-active' : ''
                                        }
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Routes>
                        {routes.map(({ path, Component }) => (
                            <Route
                                path={path}
                                element={<Component />}
                                key={path}
                            />
                        ))}
                        <Route
                            path='*'
                            element={<Navigate to={routes[0].to} replace />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};
