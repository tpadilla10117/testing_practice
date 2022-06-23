/* Testing async code in Jest: */

    const fetch = require('node-fetch');
    const swapi = require('./AsyncScript');

    describe('StarwarsAPI', () => {

        it('calls swapi to get people', (done) => {
            expect.assertions(1)
            swapi.getPeople(fetch).then(data => {
                expect(data.count).toEqual(82)
                done();
            })
        })

        //OR you can just return the promise

        it('calls swapi to get people with a promise', () => {
            expect.assertions(2)
            return swapi.getPeoplePromise(fetch).then(data => {
                expect(data.count).toEqual(82)
                expect(data.results.length).toBeGreaterThan(5)
            })
        })

        //Mocking a fetch call:
        it('getPeople returns count and results', () => {
            const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
                json: () => Promise.resolve({
                    count: 82,
                    results: [0,1,2,3,4,5,]
                })
            }))
            expect.assertions(3)
            return swapi.getPeoplePromise(mockFetch).then(data => {
                expect(mockFetch.mock.calls.length).toBe(1)
                expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people')
                expect(data.count).toEqual(82)
            })
        })

    })