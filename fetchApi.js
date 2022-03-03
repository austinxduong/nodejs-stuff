import fetch from 'node-fetch';
// alert('hi austi, script succesfully connected')

// const regeneratorRuntime = require("regenerator-runtime");

// Method #1 
// const fetchAPIArgument = "https://whispering-citadel-46770.herokuapp.com/api/v1/planets"

// async function getAPI() {

//     const url = "https://whispering-citadel-46770.herokuapp.com/api/v1/planets"

//     try {
//         let res = await fetch(url)
//         return await res.json()
       
//     } catch (error) {
//         console.log(error)
//     }
    
// }

// getAPI(fetchAPIArgument)

// export default fetchAPIArgument;

/* Output
}, {…}, {…}, {…}, {…}, {…}, {…}, 
{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, 
{…}, {…}]
*/


// Method #2

    // let fetchResponse = fetch("https://whispering-citadel-46770.herokuapp.com/api/v1/planets")
    //     fetchResponse.then(res => res.json())
    //                 .then (data => {
    //                     console.log(data)
    //                 })
/* Output
}, {…}, {…}, {…}, {…}, {…}, {…}, 
{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, 
{…}, {…}]
*/

// Method #3

// const fetchVariable = fetch('https://whispering-citadel-46770.herokuapp.com/api/v1/planets/')
//     .then(res => {
//         console.log(res)
//         if (res.ok) {
//             console.log("fetch response status 200!")
//         } else {
//             console.log("fetch not connected")
//         }
//         res.json()
//         })
//     .then(data => console.log(data))
//     .catch(error => console.log('FETCH FAILED'))

// Method #4

// export function fetchHomemadeApi() {
//     const res = fetch('https://whispering-citadel-46770.herokuapp.com/api/v1/planets/')
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(error => console.log('FETCH FAILED'))
// }

// fetchHomemadeApi()


// async function fetchHomemadeApi() {
//     const response = await fetch('https://whispering-citadel-46770.herokuapp.com/api/v1/planets/');
//     const json = await response.json();

//     return json
// }

// console.log(await fetchHomemadeApi())


//Method #5
export async function fetchApi() {
    try {
        const response = await fetch('https://whispering-citadel-46770.herokuapp.com/api/v1/planets/');

        if (!response.ok) {
            throw new Error(`Fetch Failed!: ${response.status}`)
        }

        const result = await response.json() 
        return result
    } catch (err) {
        console.log(err)
    }
}

<<<<<<< HEAD
// must await (or .then) when calling fetchAPI
// await will return the json data to the console/terminal
// Promise { <pending> } shows, when 'await' is omitted 
console.log(await fetchApi())
=======
console.log("austi moved to the console")
>>>>>>> main
