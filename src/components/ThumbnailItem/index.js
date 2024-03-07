// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onChangeImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onClickImageButton = () => {
    onChangeImage(id)
  }

  const imgClassname = isActive ? 'active-image-className' : 'thumb-image'

  return (
    <li className="list-item">
      <button type="button" className="image-btn" onClick={onClickImageButton}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={imgClassname}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
