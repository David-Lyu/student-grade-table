var tableElement = document.getElementById("table");
var headerAverages = document.getElementById("updateAverages")
var formElement = document.querySelector("form")
var pElement = tableElement.querySelector("p");
var gradeForm = new GradeForm(formElement);
var gradeTable = new GradeTable(tableElement,pElement);
var pageHeader = new PageHeader(headerAverages)
var viewGrades = new App(gradeTable,pageHeader,gradeForm);
