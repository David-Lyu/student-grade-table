var tableElement = document.getElementById("table");
var headerAverages = document.getElementById("updateAverages")
var gradeTable = new GradeTable(tableElement);
var pageHeader = new PageHeader(headerAverages)
var viewGrades = new App(gradeTable,pageHeader);
