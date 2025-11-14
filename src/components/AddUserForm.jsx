import React, { useState } from 'react'

const AddUserForm = () => {

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
        console.log(user);


    }
    return (
        <div>

            <form onSubmit={handleSubmit}>


                <div>
                    <label htmlFor="">Name</label>
                    <input value={user.name} id="name" onChange={handleChange} type="text" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input value={user.email} id="email" onChange={handleChange} type="email" />
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                    <input value={user.phone} id="phone" onChange={handleChange} type="text" />
                </div>
                <div>
                    <label htmlFor="">Website</label>
                    <input value={user.website} id="website" onChange={handleChange} type="text" />
                </div>

                <button type="submit">Add Users</button>
            </form>
        </div>
    )
}

export default AddUserForm