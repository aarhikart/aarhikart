import Link from 'next/link'
import { notFound } from 'next/navigation'
import products from '../../../data/products.json'
import RelatedProducts from '../../../components/RelatedProducts'
import ProductCard from '../../../components/ProductCard'

export default async function ProductDetails({ params }) {
  const { id } = await params

  const product = products.find(
    (p) => String(p.id) === String(id)
  )

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  )

  const moreProducts = products.filter(
    (item) => item.id !== product.id
  )

  return (
    <div className="page-spacing">
      <Link href="/" className="text-decoration-none">
        <button className="back-btn">
          ← Back to Shop
        </button>
      </Link>

      <div className="detail-card">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="detail-image mb-4"
        />

        <h1 className="fw-bold mb-2">
          {product.name}
        </h1>

        <div className="product-price mb-3">
          ₹{product.price}
        </div>

        <p className="text-muted">
          {product.description}
        </p>

        <a
          href={product.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="buy-btn mt-3">
            Buy Now
          </button>
        </a>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-5">
          <h3 className="section-title mb-3">
            Related Products
          </h3>

          <RelatedProducts products={relatedProducts} />
        </div>
      )}

      <div className="mt-5">
        <h3 className="section-title mb-3">
          More Products
        </h3>

        <div className="row g-3">
          {moreProducts.map((item) => (
            <div key={item.id} className="col-6">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}