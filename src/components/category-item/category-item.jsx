import './category-item.styles.scss'

const CategoryItem = ( {category} ) => {
  const { title, imageUrl } = category
  return (
    <div className="directories-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}>
      </div>
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  )
}


export default CategoryItem