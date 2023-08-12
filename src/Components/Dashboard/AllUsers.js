
import User from './User';
import { useQuery } from 'react-query';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery(['users'], () =>
        fetch('http://localhost:8000/user',
            {
                method: 'GET',

            }
        )
            .then(res =>res.json()
            ));
    if (isLoading) {
        return <span className="loading s loading-ring loading-lg"></span>
    }
    console.log(users)
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, index) => <User
                                index={index}
                                user={user}
                                refetch={refetch}
                                key={user.key}
                            ></User>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;