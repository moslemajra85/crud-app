import { useEffect, useState } from "react"
import axios from "axios"
const App = () => {

  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)


  const fetchUsers = () => {


    axios.get('https://jsonplaceholder.typicode.com/usersx')
      .then((response) => {
        setUsers(response.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })


  }
  
  useEffect(() => {
    setLoading(true)
    fetchUsers()


  }, [])



  return (
    <div>
      {loading ? <p>...</p> : ''}
      {error ? <p>{error.message}</p> : ''}
      {
        users.map(user => <h1>{user.name}</h1>)
      }
    </div>
  )
}

export default App