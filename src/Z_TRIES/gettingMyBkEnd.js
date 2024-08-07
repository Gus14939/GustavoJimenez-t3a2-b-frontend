import React, { useEffect, useState } from "react";

const GettingMyBkEnd = () => {

    const Planthora_Login = "http://localhost:3333/profile/all";

    const [users, setUsers] = useState([]);

    const getPlanthoraUsers = async () => {
        try {
            let result = await fetch(Planthora_Login).then((response) => response.json());
            setUsers(result.data);
        } catch (error) {
        console.log("error ", error);
        }
    };

    useEffect(() => {
        getPlanthoraUsers();
    }, []);

    return( 
        <div>
            {users.length > 0 ? (
                users.map((user, index) => (
                    <div key={index}>{user.name}</div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default GettingMyBkEnd;
