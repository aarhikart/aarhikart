'use client'

import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="text-decoration-none text-dark">
      <div className="product-card">
        <img
          src={product.images[0]}
          className="product-image"
          alt={product.name}
        />

        <div className="product-content">
          <div className="product-title">{product.name}</div>
          <div className="product-price">₹{product.price}</div>
        </div>
      </div>
    </Link>
  )
}