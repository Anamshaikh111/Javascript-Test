
function reverseWords(sentence) {
    return sentence
    .split(" ")
    .map(word => word
        .split(" ")
        .reverse()
        .join(" ")
    )
    .join(" ");
}

let input1 = "Hello World From Wisdom Sprouts IT Training Hub";
console.log(reverseWords(input1));
