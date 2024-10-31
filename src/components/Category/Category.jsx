
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import { getProductByCategory } from "../../data/asyncMock";


import ItemList from "../ItemList/ItemList";

export default function ProductsCategory() {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getProductByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    }, [categoryId]);

    return (
        <div className="container mx-auto max-w-[1170px]">
            <ItemList products={products} />
        </div>
    );
};
