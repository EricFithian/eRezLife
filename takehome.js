/* 
Question two: Take in a string of HTML tags and return a formated
HTML doc if it's proper HTML syntax and throws an error if not. Ignore
self closing tags
*/

function parseHTML(string) {
    let html = '';
    let tags = [];
    for(let i = 0; i < string.length; i++) {
        if(string[i] === '<') {
            if(string[i + 1] == '/') {
                let closingTag = '';
                while(string[i] !== '>') {
                    closingTag += string[i];
                    i++;
                }
                // console.log(tags)
                // console.log('<' + closingTag.slice(2, closingTag.length))
                if('<' + closingTag.slice(2, closingTag.length) + '>' !== tags[tags.length - 1]) return "This is not a valid HTML input";
                else {
                    tags.pop();
                    html = html + `    `.repeat(tags.length) + closingTag + `>
`;
                }
            } else {
                let newTag = '';
                while(string[i] !== '>') {
                    newTag += string[i];
                    i++;

                }
                html = html + `    `.repeat(tags.length) + newTag + `>
`;
                tags.push(`${newTag}>`);
            }
            // console.log(html)
        }
    }
    if(tags.length) return "This is not a valid HTML input"
    return html
}

console.log(parseHTML("<html><body><div><a></a></div></body></html>"))
console.log(parseHTML("<html><body><div></a></body></html>"))
console.log(parseHTML("<html><body><div><a></div></a>"))

/*
Question 3: recursive function with array
*/

const recrusiveFunc = (arr, count = -1) => {
    count++;
    if(arr.length === 1) return `${`    `.repeat(count)}<${arr[0]}>
${`    `.repeat(count)}</${arr[0]}>
`
    return `${`    `.repeat(count)}<${arr[0]}>
` + recrusiveFunc(arr.slice(1, arr.length), count) + `${`    `.repeat(count)}</${arr[0]}>
`
}

console.log(recrusiveFunc(['a', 'b', 'c', 'd', 'e', 'f']))