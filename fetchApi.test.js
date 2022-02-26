const getAPI = require ('./fetchApi.js');
const fetching = require('./fetchApi.js')
// const fetchHomemadeApi = require('./fetchApi.js')
import { fetchHomemadeApi } from './fetchApi.js';


const unmockedFetch = global.fetch

beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
  })

afterAll(() => {
    global.fetch = unmockedFetch
  })


    test('returns 200 status code', () => {
         
        const res = fetchHomemadeApi()

        console.log()
    expect().toBe(200)
    })
