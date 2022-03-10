import { useContext } from 'react';
import { ProductTitleProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export const ProductTitle = ({
    title,
    className,
    style,
}: ProductTitleProps) => {
    const { title: productTitle } = useContext(ProductContext);
    return (
        <span
            className={`${styles.productDescription} ${className}`}
            style={style}
        >
            {title ? title : productTitle}
        </span>
    );
};
