// import {Link} from "react-scroll";
// import { useLocation } from "react-router-dom/dist/umd/react-router-dom.development";
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';

type UserSessProps = {
    user: string;
    password: string;
  };

const UserSess: React.FC<UserSessProps> = ({user, password}) => {
    const [token, setToken] = useState(() => localStorage.getItem('token') || null);
    const [tokenExp, setTokenExp] = useState(() => token ? jwtDecode(token).exp : null)

    useEffect(() => {
        //code to get token 



        //error if login failed


        //set token
        
    });
    return (
        <></>
    );
};

export default UserSess;
