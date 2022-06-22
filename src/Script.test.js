/* Sample File to write Unit Tests in Jest: */
    const googleSearch = require('./Script.js');

    const dbMock = [
        'dog.com',
        'cheesepuff.com',
        'disney.com',
        'dogpictures.com'
    ];

/* This is a sample of assertion library: */

    describe('googleSearch', () => {

        it('is a sample test', () => {
            expect('hello').toBe('hello')
        })

        it('is searching google', () => {
            expect(googleSearch('testtest', dbMock) ).toEqual([])
            expect(googleSearch('dog', dbMock) ).toEqual(['dog.com', 'dogpictures.com'])
        })

        it('work with undefined and null input', () => {
            expect(googleSearch(undefined, dbMock)).toEqual([]);
            expect(googleSearch(null, dbMock)).toEqual([]);
        })

        it('Does not return more than 3 matches', () => {
            expect(googleSearch('.com', dbMock).length).toEqual(3);
        })
    })