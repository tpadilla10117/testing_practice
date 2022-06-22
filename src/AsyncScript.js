/* Testing Asynchrous Tests in Jest: */

/* 
Notes:

- Using the StarWars API
- fetch() works on the window object, so we need node-fetch() -> npm i node-fetch
*/

    const fetch = require('node-fetch');
    
    const getPeoplePromise = fetch => {
        return fetch('https://swapi.dev/api/people')
            .then(response => response.json() )
            .then(data => {
                return {
                    count: data.count,
                    results: data.results
                }
            })
    };

/* Fetching from swapi with async code: */
    const getPeople = async (fetch) => {
        const getRequest = await fetch('https://swapi.dev/api/people');
        const data = await getRequest.json();
        return {
            count: data.count, 
            results: data.results
        }
    };

    /* getPeople(fetch) */

    module.exports = {
        getPeople,
        getPeoplePromise
    }