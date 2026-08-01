const UserList = [
    {id: 20, name: 'ciise', email: 'ciise@example.com'},
    {id:30, name: 'cabdi', email: 'cabdi@example.com'},
    {id:40, name: 'ahmed', email: 'ahmed@example.com'}
]

const users = () => {
    return (
        <div>
            <h2>User List</h2>
            {UserList.length > 0 ? (<ul>
                {UserList.map((user) => (
                    <li key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </li>
            ))};
        </ul>) : (<p>
            no user found
        </p>)};
    </div>
)
};
export default users;