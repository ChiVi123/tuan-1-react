import { useMemo, useRef, useState } from 'react';

type Product = { name: string; price: number };

function UseMemoExample() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [productName, setName] = useState<string>('');
    const [productPrice, setPrice] = useState<number>(0);
    const [products, setProducts] = useState<Product[]>([]);
    const total = useMemo(() => products.reduce((prev, curr) => prev + curr.price, 0), [products]);
    const handleSubmit = () => {
        setProducts([...products, { name: productName, price: productPrice }]);
        inputRef.current?.focus();
    };
    return (
        <div className='App'>
            <input
                ref={inputRef}
                type='text'
                name='name'
                id='name-input'
                value={productName}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type='number'
                name='name'
                id='name-input'
                value={productPrice}
                onChange={(e) => setPrice(Number(e.target.value))}
            />
            <button type='button' onClick={handleSubmit}>
                submit
            </button>
            <h2>{total}</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={'product-' + index}>
                        {product.name}-{product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UseMemoExample;
