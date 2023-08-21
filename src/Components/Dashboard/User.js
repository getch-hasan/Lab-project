import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index, refetch }) => {
    const { name, email, role } = user


    const makeAdmain = () => {
        fetch(`http://localhost:8000/user/admin/${email}`,
            {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }

        )
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.result.modifiedCount > 0) {

                    toast.success('successfully made an admin')
                    refetch()

                }
                console.log(data)
            });
    }
    const removeAdmin = () => {
        console.log('clicked')
        fetch(`http://localhost:8000/user/removeadmin/${email}`,
            {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    'content-type': 'application/json'
                },


            }

        )
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to remove  Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.result.modifiedCount > 0) {

                    toast.success(' admin removed')
                    refetch()

                }
                console.log(data)
            });

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={() => makeAdmain()} className="btn btn-xs">Make admin</button>}</td>
            <td>{role === 'admin' && <button onClick={() => removeAdmin()} className="btn btn-xs">remove admin</button>}</td>
        </tr>
    );
};

export default User;