console.log("Home Work 3 - task 1");

function slugify(title) { 
    let slug = "";
    let isFirst = true;
    for (const word of title.split(' ')) {
        slug += (isFirst ? '' : '-') + word.toLowerCase();
        isFirst = false;
    }
    
    return slug;
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
