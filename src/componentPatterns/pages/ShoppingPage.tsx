import { ProductCard } from '../components';
import '../styles/custom-styles.css';
const product = {
    id: '1',
    title: 'Coffe Mug',
    img: './coffee-mug.png',
};

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <ProductCard
                product={product}
                className={'bg-dark'}
                style={{ backgroundColor: '#363a45' }}
            >
                {/* This children allow add styles */}
                <ProductCard.Image className='custom-image' />
                <ProductCard.Title className={'text-white'} />
                <ProductCard.Buttons className='custom-buttons' />
            </ProductCard>
        </div>
    );
};

