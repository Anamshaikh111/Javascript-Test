function createSlug(str) {
    return str
    .toLowerCase()
    .replace([^a-z0-9\s]/g, "" )
    .trim()
    .replace(/\s+/g, "-");
}

const input = "Learn Javascript in 30 Days!"
console.log(createSlug(input));