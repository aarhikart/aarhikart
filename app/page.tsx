'use client'

import { useState } from 'react'
import products from '../data/products.json'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', ...new Set(products.map((p) => p.category))]

  const filtered = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchCategory =
      category === 'All' || product.category === category

    return matchSearch && matchCategory
  })

  return (
    <>
      <Header />

      <div className="page-spacing">
        <SearchBar
          value={search}
          onChange={setSearch}
          products={products}
        />

        <CategoryFilter
          categories={categories}
          active={category}
          setActive={setCategory}
        />

        <div className="d-flex align-items-center mb-3 mt-4">
          <h2 className="section-title mb-0">All Productssd</h2>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center mt-5">
            <h5>No products found</h5>
          </div>
        ) : (
          <div className="row g-3">
            {filtered.map((product) => (
              <div key={product.id} className="col-6">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}