import User from "./User"
const UsersList = ({ users, deleteUser }) => {
    return (
        <div className="users-grid-container">
            <div className="users-grid">
                {users.map(user => <User deleteUser={deleteUser} key={user.id} user={user} />)}
            </div>
        </div>
    )
}

export default UsersList