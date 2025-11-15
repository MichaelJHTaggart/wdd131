const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

let keys = studentReport.keys()

console.log(keys)

// for loop
// for(let i = 0; i < (studentReport.length - 1); i++) {
//     if (studentReport[i] < 30){
//         console.log(studentReport[i])
//     }
// }


// while
// let studentReportIndex = 0
// while (studentReportIndex < (studentReport.length - 1)) {
//     if (studentReport[studentReportIndex] < 30){
//         console.log(studentReport[studentReportIndex])
//     }
//     studentReportIndex++
// }

// foreach
// studentReport.forEach((value, index) => {(value < 30) ? console.log(value) : "" })

// for...in
// for (let i in studentReport) {
    
// }





/*
    function forEach(functionExample){
        console.log(functionExample)
        }
        
        function colorPicker() {
            console.log("blue")
        }
            
        ? Why is it printing an arrow function in the console, but not console.logging "blue"?
        forEach(() => console.log("blue"))
        ? How can I have the forEach defined function print the functionExample reference & invoke the function so that it runs?
        ? Why does this show undefined for the console.log(functionExample)
        forEach(colorPicker())
    }
*/