const numbers = [1, 22, 12, 66, 90, 51, 11];

let doubledNumbers = numbers.map(function(item, index, array) {
    return item * 2;
})
// ответ: const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers)

const developers = [
    {
        id: 1,
        fullName: 'Anton Petrov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
        salary: 1000,
    },
    {
        id: 2,
        fullName: 'Ivan Ivanov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
        salary: 950,
    },
    {
        id: 3,
        fullName: 'Albert Sidorov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
        salary: 850,
    },
];

let middleDevelopers = developers.map(function (item, index, array){
    item.salary += 500
    item.skills.push('TypeScript')
    return item
})

//ответ: const middleDevelopers = developers.map(dev => ({
//     id: dev.id,
//     name: dev.fullName,
//     skills: [...dev.skills, 'TypeScript'],
//     salary: dev.salary + 500,
// }));

console.log(middleDevelopers)