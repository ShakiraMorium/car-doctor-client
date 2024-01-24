import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkings = () => {
 const {user} = useContext(AuthContext);
 const [checkings, setCheckings] = useState([])

 const url = `http://localhost:5000/checkings?email=${user.email}`
 useEffect (() =>{
    fetch(url)
    .then(res=>res.json())
    .then(data = console.log(data))
 }, [])
    return (
        <div>
            
        </div>
    );
};

export default Checkings;