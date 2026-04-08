function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const obj = {
    name: "John",
    age: 25,
    address: {
        city: "Nandgaon"
    }
};

const copy = deepCopy(obj);

copy.address.city = "Naashik";

console.log(obj.address.city);