import { useNavigate } from 'react-router-dom'

const Card = ({ name, url, description, imageURL }) => {
    const navigate = useNavigate()

    return (
        <article className="card" onClick={() => navigate(`/creator/${name}`)}>
            {imageURL && <img src={imageURL} alt={name} className="card-image" />}
            <div>
                <h2>{name}</h2>
                <a href={url} onClick={e => e.stopPropagation()}>{url}</a>
                <p>{description}</p>
            </div>
        </article>
    )
}

export default Card

/* styles */
const style = document.createElement('style')
style.textContent = `
  .card {
    cursor: pointer;
    transition: transform 0.2s;
    overflow: hidden;
    padding: 0;
  }
  .card:hover {
    transform: scale(1.02);
  }
  .card-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  .card div {
    padding: 16px;
  }
`
document.head.appendChild(style)