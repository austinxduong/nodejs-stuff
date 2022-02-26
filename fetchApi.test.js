const getAPI = require ('./fetchApi.js');
const fetchResponse = require('./fetchApi.js')

describe('API mock test, gets all planets', async () => {
    test('returns 200 status code', () => {

        const response = fetchResponse

    expect(response.statusCode).toBe(200)

    })

})
