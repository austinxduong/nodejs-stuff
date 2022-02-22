import fetch from 'node-fetch';

// Method #1 
const fetchAPIArgument = "https://whispering-citadel-46770.herokuapp.com/api/v1/planets"

async function getAPI(url) {
    const res = await fetch(url)

    var data = await res.json();
    console.log(data)
}

getAPI(fetchAPIArgument)

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





console.log("austi moved to the console")