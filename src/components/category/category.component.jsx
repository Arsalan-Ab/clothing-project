import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../product-card/product-card.componenet'
import './category.styles.scss'

import { CategoriesContext } from '../../contexts/categories.context'

const CategoryComponent = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])

    return (
        <div className='category-container'>
            {products &&
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default CategoryComponent