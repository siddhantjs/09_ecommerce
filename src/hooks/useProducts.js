import { useState, useEffect } from "react";
import axios from 'axios';

const useProduct = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(null);

        async function fetchProducts() {
            try {
                const response = await fetch(`https://dummyjson.com/products?limit=100`);
                if (!response.ok) throw new Error("Product not found!");
                const data = await response.json();
                console.log(data);
                setProducts(data.products);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [])

    return { loading, error, products };
}

export default useProduct;