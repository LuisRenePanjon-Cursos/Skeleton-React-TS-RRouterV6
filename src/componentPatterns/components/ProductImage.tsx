import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';


export const ProductImage = ({ img = '' }) => {
    const { img: productImg } = useContext(ProductContext);
    let imgToShow: string;
    if (img) {
        imgToShow = img;
    } else if (productImg) {
        imgToShow = productImg;
    } else {
        imgToShow = noImage;
    }

    return (
        <img
            className={styles.productImg}
            src={imgToShow}
            alt='Imagen de producto'
        />
    );
};