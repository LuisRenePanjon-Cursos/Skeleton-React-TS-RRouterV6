import { ReactElement } from 'react';

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    id: string;
    title: string;
    img: string | undefined;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element;
    Image: ({ img }: { img?: string }) => JSX.Element;
    Buttons: () => JSX.Element;
}

interface Product {
    id: string;
    title: string;
    img?: string;
}
