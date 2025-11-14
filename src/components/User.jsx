import React from 'react'

const User = ({ user }) => {
    return (
        <div className="user-card" key={user.id}>
            <div className="user-card-header">
                <h2 className="user-name">👤 {user.name}</h2>
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