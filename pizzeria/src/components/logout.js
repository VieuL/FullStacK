import React from 'react';
import axios from 'axios';
async function makePostRequest(url) {
    let res = await axios.post(url)
}

export default function Logout(UserID, addUserId) {
UserID.addUserId();
makePostRequest('localhost:3000/api/v1/signout');
    return(
    <h1>Vous etes déconnecté</h1>
)
}
