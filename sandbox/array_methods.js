//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate(step) {
  return `<li>${step}</li>`; //the html string made from step
}

const stepsHtml = steps.map(listTemplate);
dosument.querySelector("#myList").innerHTML = stepsHtml.join

const grades = ['A','B','A']
function convertToGpa(grade) {
    let points =0
    if (grade === 'A'){
        points = 4;}
    else if (grade === 'B'){
        points = 3;}
    return points;
}

const gpaPoints = grades.map(conertToGpa);