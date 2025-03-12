let arr = ["2025-03-10", "2024-12-25", "2023-07-01"];
let convertedDates = convertDateFormat(arr);

function convertDateFormat(dates) {
    return dates.map(date => {
        let [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    });
}

console.log(convertedDates);