import { ProductCard } from "../components";


const product = {
    id: '1',
    title: 'Coffe Mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <ProductCard product={product}>
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Buttons />    
            </ProductCard>
        </div>
    );
};
