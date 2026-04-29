import ProductCard from './ProductCard'

export default function RelatedProducts({ products }) {
  return (
    <div className="related-scroll pb-2">
      {products.map((item) => (
        <div key={item.id} style={{ minWidth: '190px' }}>
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  )
}