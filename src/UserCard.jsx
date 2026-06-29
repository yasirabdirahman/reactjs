const UserCard = (props)=> {
    return(
        <>
         <p>Name: {props.name}</p>
         <p>Email: {props.email}</p>  
        </>
    )
}

export default UserCard;