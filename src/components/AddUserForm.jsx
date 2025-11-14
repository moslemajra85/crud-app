import React, { useState } from 'react'

const AddUserForm = ({ addUser }) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        website: ""
    })

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.id]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser(user)
    }

    return (
        <div className="add-user-form-container">
            <div className="add-user-form-card">
                <div className="form-header">
                    <h2>➕ Add New User</h2>
                    <p>Fill in the details below to add a new user</p>
                </div>

                <form onSubmit={handleSubmit} className="form-content">
                    <div className="form-group">
                        <label htmlFor="name">👤 Name</label>
                        <input
                            value={user.name}
                            id="name"
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter full name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">📧 Email</label>
                        <input
                            value={user.email}
                            id="email"
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter email address"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">📱 Phone</label>
                        <input
                            value={user.phone}
                            id="phone"
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter phone number"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="website">🌐 Website</label>
                        <input
                            value={user.website}
                            id="website"
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter website URL"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">✨ Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUserForm
