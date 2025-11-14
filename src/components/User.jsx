import React from 'react'

import { MdDeleteOutline } from 'react-icons/md'

const User = ({ user, deleteUser }) => {
    return (
        <div className="user-card" key={user.id}>
            <div className="user-card-header">
                <div className="user-card-title">
                    <h2 className="user-name">👤 {user.name}</h2>
                    <button className="delete-btn" title="Delete user">
                        <MdDeleteOutline onClick={() => deleteUser(user.id)} />
                    </button>
                </div>
            </div>
            <div className="user-card-body">
                <div className="user-field">
                    <span className="field-icon">📧</span>
                    <p>{user.email}</p>
                </div>
                <div className="user-field">
                    <span className="field-icon">📱</span>
                    <p>{user.phone}</p>
                </div>
                <div className="user-field">
                    <span className="field-icon">🌐</span>
                    <p>{user.website}</p>
                </div>
            </div>
        </div>
    )
}

export default User