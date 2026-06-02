import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

const ViewCreator = () => {
    const { name } = useParams()
    const navigate = useNavigate()
    const [creator, setCreator] = useState(null)

    useEffect(() => {
        const fetchCreator = async () => {
            const { data } = await supabase
                .from('creators')
                .select()
                .eq('name', decodeURIComponent(name))
                .single()
            setCreator(data)
        }
        fetchCreator()
    }, [name])

    if (!creator) return <p>Loading...</p>

    return (
        <main className="container">
            <button className="secondary" onClick={() => navigate('/')}>← Back</button>
            {creator.imageURL && <img src={creator.imageURL} alt={creator.name} className="view-image" />}
            <h1>{creator.name}</h1>
            <a href={creator.url} target="_blank" rel="noreferrer">{creator.url}</a>
            <p>{creator.description}</p>
            <div className="button-group">
                <button onClick={() => navigate(`/creator/${creator.name}/edit`)}>Edit</button>
            </div>
        </main>
    )
}

export default ViewCreator

/* styles */
const style = document.createElement('style')
style.textContent = `
  .view-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 24px;
    margin-top: 24px;
  }
  .button-group {
    display: flex;
    gap: 12px;
    margin-top: 24px;
  }
`
document.head.appendChild(style)