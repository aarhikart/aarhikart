export default function Header() {
  return (
    <div className="header-gradient sticky-top d-flex align-items-center justify-content-between px-4 shadow-sm">
      <div>
        <h2 className="headerm"><img src="products/logo.png"/></h2>
      </div>

      <div className="text-end">
        <div className="store-text">Premium</div>
        <div className="store-text">Store</div>
      </div>
    </div>
  )
}