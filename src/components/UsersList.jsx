import User from "./User"
const UsersList = ({ users }) => {
    return (
        <div className="users-grid-container">
            <div className="users-grid">
                {users.map(user => <User key={user.id} user={user} />)}
            </div>
        </div>
    )
}

export default UsersList