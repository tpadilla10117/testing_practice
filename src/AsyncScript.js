/* Testing Asynchrous Tests in Jest: */

/* 
Notes:

- Using the StarWars API
- fetch() works on the window object, so we need node-fetch() -> npm i node-fetch
*/

    const fetch = require('node-fetch');

    const getPeople = fetch => {
        return fetch('https://swapi.co/api/people')
            .then(response => response.json() )
            .then(data => {
                console.log(data)
                return {
                    count: data.count,
                    results: data.results
                }
            })
    };

    getPeople(fetch)