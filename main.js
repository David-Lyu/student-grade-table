var tableElement = document.getElementById("table");
var headerAverages = document.getElementById("updateAverages")
var formElement = document.querySelector("form")
var pElement = tableElement.querySelector("p");
var asideElement = document.querySelector("aside");
var gradeForm = new GradeForm(formElement,asideElement);
var gradeTable = new GradeTable(tableElement,pElement,formElement,asideElement);
var pageHeader = new PageHeader(headerAverages)
var viewGrades = new App(gradeTable,pageHeader,gradeForm,formElement);
viewGrades.start();
