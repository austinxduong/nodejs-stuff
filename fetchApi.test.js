const fetchResponse = require ('./fetchApi')

test('fetches an API', () => {

    let fetchResponse = fetch("https://whispering-citadel-46770.herokuapp.com/api/v1/planets")

    const result = fetchResponse("Jupiter")
    expect(result).toBe('Jupiter')
})