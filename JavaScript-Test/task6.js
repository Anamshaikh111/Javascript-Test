function groupByLength(words) {
    const result = {};

    words.forEach(word => {
        const len = word.length;

        if (!result[len]) {
            result[len] = [];
        }

        result[len].push(word);
    });

    return result;
}

const words = ["dog", "apple", "sun", "table", "cat", "pie"];
console.log(groupByLength(words));