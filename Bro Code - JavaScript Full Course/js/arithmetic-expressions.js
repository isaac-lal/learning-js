// #3  (00:16:32) arithmetic expressions 🧮

/*
    arithmetic expression is a combination of...
    operands (values, variables, etc.)
    operators (+ - * / %)
    that can be evaluated to a value
    ex. y = x + 5;
*/

let students = 20;
students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
console.log(students);

let extraStudents = students % 3;
console.log(extraStudents);

let result = 1 + 2 * (3 + 4);
console.log(result);

let nextResult = (1 + 2) * (3 + 4);
console.log(nextResult);