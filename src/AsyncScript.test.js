/* Testing async code in Jest: */

    const fetch = require('node-fetch');
    const swapi = require('./AsyncScript');

    describe('StarwarsAPI', () => {

        it('calls swapi to get people', () => {
            expect.assertions(1)
            return swapi.getPeople(fetch).then(data => {
                expect(data.count).toEqual(82)
            })
        })

        it('calls swapi to get people with a promise', () => {
            return swapi.getPeoplePromise(fetch).then(data => {
                expect(data.count).toEqual(82)
            })
        })
    })