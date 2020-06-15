const students = Array(1000).fill([
    {
        name: 'Student 1',
        marks: ['5', '4', '6']
    },
    {
        name: 'Student 2',
        marks: ['1', '2', '2', '3']
    },
    {
        name: 'Student 3',
        marks: []
    },
]).flat()

const calculateSum = function (numbers) {

    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        sum = sum + number
    }

    return sum

}

const calculateAverage = function (numbers) {

    const sum = calculateSum(numbers)
    const length = numbers.length

    if (length === 0) {
        console.error('You cant divide by 0!')
    }

    return sum / length

}


const addAverageToStudent = function (student) {

    const average = calculateAverage(student.marks)

    student.average = Math.round(average * 100) / 100

    return student

}

const calculateStudentsAverages = function (students) {
    
    const studentsWithAverages = students.map(addAverageToStudent)

    return studentsWithAverages

}

console.time('calculateStudentsAverages execution')

const results = calculateStudentsAverages(students)

console.timeEnd('calculateStudentsAverages execution')

console.time('calculateStudentsAverages second execution')

const secondResults = calculateStudentsAverages(students)

console.timeEnd('calculateStudentsAverages second execution')


console.log(results)
console.log(secondResults)