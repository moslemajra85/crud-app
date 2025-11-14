import { useEffect, useState } from "react"
import axios from "axios"
import LoadingSpinner from "./components/LoadingSpinner"
import ErrorMessage from "./components/ErrorMessage"
import UsersList from "./components/UsersList"
const App = () => {

  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)


  const deleteUser = (id) => {


    // update the state
    setUsers(users.filter((user) => user.id !== id))


    // update Server
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => console.log(response))
      .catch(err => setError(err))
  }
  const fetchUsers = () => {


    axios.get('https://jsonplaceholder.typicode.com/users')
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
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {
        <UsersList deleteUser={deleteUser} users={users} />
      }


    </div>
  )
}

export default App