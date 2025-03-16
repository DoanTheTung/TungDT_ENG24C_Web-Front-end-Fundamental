let students = [

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }

];

function getAverage(scores) {
    return (scores.math + scores.english + scores.literature) / 3;
}
function filterStudents(students) {
    return students.filter(student => {
        const avg = getAverage(student.scores);
        return avg >= 8;
    })
}

const topStudents = filterStudents(students);
console.log(topStudents);