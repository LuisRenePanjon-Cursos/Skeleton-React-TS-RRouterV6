import { CSSProperties, ReactElement } from 'react';
export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    id: string;
    title: string;
    img: string | undefined;
}

export interface ProductCardHOCProps {
    (props: ProductCardProps): JSX.Element;
    Image: (props: ProductImageProps) => JSX.Element;
    Title: (props: ProductTitleProps) => JSX.Element;
    Buttons: (props: ProductButtonsProps) => JSX.Element;
}

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}

export interface ProductTitleProps {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

export interface ProductImageProps {
    img?: string;
    className?: string;
    style?: CSSProperties;
}

export interface ProductButtonsProps {
    className?: string;
    style?: CSSProperties;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}
