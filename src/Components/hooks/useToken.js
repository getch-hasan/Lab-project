import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        console.log(user)
        const currentUser = { email: email,name:user?.user?.displayName}
        if (email) {
            fetch(`http://localhost:8000/user/${email}`,
                {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                .then(res => res.json())
                .then(data =>

                // setToken(data)
                {
                    console.log(data)
                    const accessToken = data.token
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);
                }
                )

        }


    }, [user]);
    return [token];
}
export default useToken;