import axios from "axios";

export const Client = () => {
    return axios.create({
        baseURL: 'https://api.openai.com/v1',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
    });
}
