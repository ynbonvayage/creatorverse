import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

const EditCreator = ({ onUpdate } ) => {
    const { name } = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '', url: '', description: '', imageURL: ''
    })

    useEffect(() => {
        const fetchCreator = async () => {
            const { data } = await supabase
                .from('creators')
                .select()
                .eq('name', decodeURIComponent(name))
                .single()
            setFormData(data)
        }
        fetchCreator()
    }, [name])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        await supabase
            .from('creators')
            .update(formData)
            .eq('name', decodeURIComponent(name))
        onUpdate()
        navigate('/')
    }

    const handleDelete = async () => {
        await supabase
            .from('creators')
            .delete()
            .eq('name', decodeURIComponent(name))
        onUpdate()
        navigate('/')
    }

    return (
        <main className="container">
            <button className="secondary" onClick={() => navigate(-1)}>← Back</button>
            <h1>Edit Creator</h1>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input name="url" value={formData.url} onChange={handleChange} placeholder="URL" />
            <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
            <input name="imageURL" value={formData.imageURL || ''} onChange={handleChange} placeholder="Image URL (optional)" />
            <div className="button-group">
                <button onClick={handleSubmit}>Save</button>
                <button className="secondary" onClick={handleDelete}>Delete</button>
            </div>
        </main>
    )
}

export default EditCreator

/* styles */
const style = document.createElement('style')
style.textContent = `
  .button-group {
    display: flex;
    gap: 12px;
    margin-top: 24px;
  }
`
document.head.appendChild(style)