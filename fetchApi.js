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

export function fetchHomemadeApi() {
    const res = fetch('https://whispering-citadel-46770.herokuapp.com/api/v1/planets/')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log('FETCH FAILED'))
}

fetchHomemadeApi()


// async function fetchHomemadeApi() {

//     const res = await fetch('https://whispering-citadel-46770.herokuapp.com/api/v1/planets/');
//     const json = res.json();

//     return json
// }


//Method #5









console.log("austi moved to the console")