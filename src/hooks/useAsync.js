import { useState } from 'react'

export default function UseAsync() {

    const [data, setData] = useState();
    const [error, setError] = useState(false);

    function getData(api, method, body) {
        fetch(api, {
            method: method || 'GET',
            body: body
        })
            .then(res => res.json())
            .then((json) => {
                setData(json);
            })
            .catch((err) => {
                setError(err);
            })

    }

    return{ getData , data , error}
}
