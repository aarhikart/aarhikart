'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SearchBar(props) {
  const { value, onChange, products = [] } = props

  const [focused, setFocused] = useState(false)

  const filteredSuggestions = products
    .filter((product) =>
      product.name
        .toLowerCase()
        .includes(value.toLowerCase())
    )
    .slice(0, 6)

  return (
    <div className="position-relative mb-4 mt-4">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() =>
            setTimeout(() => setFocused(false), 200)
          }
        />
      </div>

      {focused &&
        value &&
        filteredSuggestions.length > 0 && (
          <div className="search-dropdown">
            {filteredSuggestions.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="search-item text-decoration-none"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="search-thumb"
                />

                <div>
                  <div className="search-name">
                    {product.name}
                  </div>

                  <div className="search-price">
                    ₹{product.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
    </div>
  )
}