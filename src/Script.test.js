/* Sample File to write Unit Tests in Jest: */
    const googleSearch = require('./Script.js');

    const dbMock = [
        'dog.com',
        'cheesepuff.com',
        'disney.com',
        'dogpictures.com'
    ];

/* This is a sample of assertion library: */
    it('is a sample test', () => {
        expect('hello').toBe('hello')
    })

    it('is searching google', () => {
        expect(googleSearch('testtest', dbMock) ).toEqual([])
        expect(googleSearch('dog', dbMock) ).toEqual(['dog.com', 'dogpictures.com'])
    })