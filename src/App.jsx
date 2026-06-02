import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { supabase } from './client'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'

const App = () => {
  const [creators, setCreators] = useState([])

  const fetchCreators = async () => {
    const { data } = await supabase.from('creators').select()
    setCreators(data)
  }

  useEffect(() => {
    fetchCreators()
  }, [])

  const routes = useRoutes([
    { path: '/', element: <ShowCreators creators={creators} /> },
    { path: '/creator/:name', element: <ViewCreator /> },
    { path: '/creator/:name/edit', element: <EditCreator onUpdate={fetchCreators} /> },
    { path: '/creator/add', element: <AddCreator onAdd={fetchCreators} /> },
  ])

  return <div>{routes}</div>
}

export default App