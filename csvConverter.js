const uploadConfirm = document.getElementById('uploadConfirmation')
const printOut = document.querySelector('.results')

const checkResults = (object) => {
    console.log(object);
    let p, a;
    if(object.sides < 0) return "Please enter a positive value"
    if(object.shape.toLowerCase() === 'triangle') {
        p = 3 * object.sides;
        a = Math.cbrt(3) / 4 * object.sides ** 2;
    } else if (object.shape.toLowerCase() === 'square') {
        p = 4 * object.sides;
        a = object.sides ** 2;
    } else if(object.shape.toLowerCase() === 'pentagon') {
        p = 5 * object.sides;
        a = 1/4 * object.sides ** 2 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5)))
    } else if(object.shape.toLowerCase() === 'circle') {
        p = 2 * Math.PI * object.sides;
        a = Math.PI * object.sides ** 2;
    } else {
        return `Your shape of ${object.shape} does not match a triangle, a square, a pentagon or a circle`
    }
    return `A ${object.shape} with side length ${object.sides} u has a perimeter of ${p} u and an area of ${a} u^2`;
}

uploadConfirm.addEventListener('click', () => {
    Papa.parse(document.getElementById('uploadFile').files[0], {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
            console.log(results.data);
            printOut.innerHTML = ''
            results.data.forEach((result, idx) => {
                printOut.innerHTML = '';
                printOut.innerHTML = `${printOut.innerHTML} ${idx} - ${checkResults(result)}<hr>`;
            })
        }
    })
})