const getAPI = require ('./fetchApi.js');
const fetching = require('./fetchApi.js')
// const fetchApi = require('./fetchApi.js')
import fetchApi from './fetchApi'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});


test('returns 200 status code', async () => {
         
const json = await fetchApi();

  
  expect(json).toBe(200)
})
  
