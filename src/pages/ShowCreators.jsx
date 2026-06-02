import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

const ShowCreators = ({ creators }) => {
    const navigate = useNavigate()

    return (
        <main className="container">
            <div className="header">
                <h1>Creatorverse</h1>
                <button onClick={() => navigate('/creator/add')}>+ Add Creator</button>
            </div>
            {creators.length === 0 ? (
                <p>No creators yet!</p>
            ) : (
                <div className="grid">
                    {creators.map(creator => (
                        <Card key={creator.name} {...creator} />
                    ))}
                </div>
            )}
        </main>
    )
}

export default ShowCreators

/* styles */
const style = document.createElement('style')
style.textContent = `
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
  }
`
document.head.appendChild(style)