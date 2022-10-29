//using the map: 

//Challenge 1
var num = [1,2,3,4,5]

const square = num.map(function(item){
    return item * item
})

console.log(square)


//challenge 2
var names = ['anish', 'sugam', 'niraj', 'nischal']

const uppercase = names.map(function(name){
    return name[0].toUpperCase() + name.slice(1)
})

console.log(uppercase)


//challenge 3
var colleges = ['National', 'Asian', 'Banasthali']
const college = colleges.map(naam =>{
    return `<p>${naam}</p>`
})
console.log(college)