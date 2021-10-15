import axios from 'axios';

const baseUrl = 'be-chat-app.herokuapp.com';

// ------------ AUTH -------------//

export const postAuth = async (data:any) =>{

    const resp = await axios.post(baseUrl, data); 

    switch (resp.status) {
        case 200: 
            break;

        case 400: 
            break;

        default:
            break;
    }

    return resp;

}

// create cookies