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

    let fetchResponse = fetch("https://whispering-citadel-46770.herokuapp.com/api/v1/planets")
        fetchResponse.then(res => res.json())
                    .then (data => {
                        console.log(data)
                    })
/* Output
}, {…}, {…}, {…}, {…}, {…}, {…}, 
{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, 
{…}, {…}]
*/

//  fetch("https://whispering-citadel-46770.herokuapp.com/api/v1/planets/")
//     .then(res => {
//         if (res.ok) {
//             console.log("fetch connected")
//         } else {
//             console.log("fetch not connected")
//         }
//         res.json()
//         })
//     .then(data => console.log(data))
//     .catch(error => console.log('FETCH FAILED'))









console.log("austi moved to the console")