import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client'

const AddCreator = ({ onAdd }) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '', url: '', description: '', imageURL: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        await supabase.from('creators').insert([formData])
        onAdd()
        navigate('/')
    }


    return (
        <main className="container">
            <button className="secondary" onClick={() => navigate('/')}>← Back</button>
            <h1>Add Creator</h1>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="url" placeholder="URL" onChange={handleChange} />
            <input name="description" placeholder="Description" onChange={handleChange} />
            <input name="imageURL" placeholder="Image URL (optional)" onChange={handleChange} />
            <button onClick={handleSubmit}>Add Creator</button>
        </main>
    )
}

export default AddCreator

/* styles */
const style = document.createElement('style')
style.textContent = `
  main.container {
    max-width: 600px;
  }
  input {
    margin-bottom: 16px;
  }
`
document.head.appendChild(style)