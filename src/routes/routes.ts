import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../lazyloadModule/pages/NoLazy';
// import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyloadModule/pages";


// Soporta Lazy Components y Normal Components
type JSXComponent = () => JSX.Element

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import('../lazyloadModule/layout/LazyLayout'))


export const routes: Route[] = [
    {
        to: '/lazy-layout/',
        path: '/lazy-layout/*',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
];