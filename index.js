let submit = document.getElementById("submit");
let output = document.getElementById("output");


submit.addEventListener("click", () => {
let date1 = new Date(document.getElementById("DOB-1").value);
let date2 = new Date(document.getElementById("DOB-2").value);
// console.log(date1, date2);
if (date1.getTime() && date2.getTime()) {
    let timeDifference = date2.getTime() - date1.getTime();
    let dayDifference = Math.abs(timeDifference / (1000 * 3600 *24));
    
    output.innerHTML = "Difference between the both dates is " + dayDifference +
    " days";
}
});