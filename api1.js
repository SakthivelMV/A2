//Displaying all countries "Flags","names","region","sub-region","population" from the Rest API

let xhr = new XMLHttpRequest()
xhr.open("GET", "https://restcountries.com/v3.1/all")
xhr.send()
xhr.onload = function()
{console.log(JSON.parse(xhr.response))


let response=JSON.parse(xhr.response)
response.forEach(({flags})=>{
    console.log(flags)
})

response.forEach(({names})=>{
    console.log(names)
})

response.forEach(({region})=>{
    console.log(region)
})

response.forEach(({subregion})=>{
    console.log(subregion)
})

response.forEach(({population})=>{
    console.log(population)
})
}