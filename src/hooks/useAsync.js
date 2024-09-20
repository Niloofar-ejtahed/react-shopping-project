import { useState } from 'react'

export default function UseAsync() {

    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    function getData(api, method, body) {
        setLoading(true)
        fetch(api, {
            method: method || 'GET',
            body: body
        })
            .then(res => res.json())
            .then((json) => {
                setData(json);
                setLoading(false)
            })
            .catch((err) => {
                setError(err);
            })

    }

    return { getData, data, loading, error }
}
