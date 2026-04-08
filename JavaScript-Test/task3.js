
function getAdults(users) {
    return users.filter(user => user.age > 18);
}

const data =[
    { name: "Anam", age: 23 },
    {name: "Arshan", age: 18},
    {name: "Gayatri", age: 24},
    {name: "Umar", age: 4}
];

console.log(getAdults(data));

