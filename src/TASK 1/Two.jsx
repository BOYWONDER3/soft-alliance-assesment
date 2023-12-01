// import { useState } from  'react'


export function Two () {

    const student = {
        name: 'isaac', age: 24, grades: [10, 20, 30, 40, 50, 60]
    }
    function calAverageGrade(student) {
        const averageGrade = student.grades.reduce((a, b) => a + b) / student.grades.length
        return `${student.name}'s average grade is {averageGrade.toFixed(1)}%`
    }

    return(
        <div>
           
        </div>
    )
}