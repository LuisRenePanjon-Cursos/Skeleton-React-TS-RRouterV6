import { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';

import {
    ProductCardProps,
    ProductContextProps,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

// CONTEXT API
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
    product,
    children,
    className,
    style
}: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();
    const { id, title, img } = product;

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                id,
                title,
                img,
            }}
        >
            <div className={`${styles.productCard} ${className}`} style={ style }>
                {children}
            </div>
        </Provider>
    );
};
