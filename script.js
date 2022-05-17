let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
let firstLetter = "";

names.forEach(name => {
    firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter === 'j') {
        console.log(`Good Bye ${name}`)
    } else {
        console.log(`Hello ${name}`)
    }
})