export default function CategoryFilter({ categories, active, setActive }) {
  return (
    <div className="category-scroll mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`category-btn ${active === category ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}