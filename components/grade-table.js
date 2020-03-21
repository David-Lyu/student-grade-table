class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbodyElement = this.tableElement.querySelector("tbody");
    var tbodyChildren = tbodyElement.querySelectorAll("tr");
    if(tbodyChildren.length === 0){
      for(var gradesIndex = 0; gradesIndex <grades.length; gradesIndex++) {
        var thElement = document.createElement("tr");
        var td1Element = document.createElement("td");
        td1Element.textContent = grades[gradesIndex].name;
        thElement.appendChild(td1Element);
        var td2Element = document.createElement("td");
        td2Element.textContent = grades[gradesIndex].course;
        thElement.appendChild(td2Element);
        var td3Element = document.createElement("td");
        td3Element.textContent = grades[gradesIndex].grade;
        thElement.appendChild(td3Element);
        tbodyElement.appendChild(thElement);
      }
    }else {
      thElement = document.createElement("tr");
      td1Element = document.createElement("td");
      td1Element.textContent = grades[tbodyChildren.length].name;
      thElement.appendChild(td1Element);
      td2Element = document.createElement("td");
      td2Element.textContent = grades[tbodyChildren.length].course;
      thElement.appendChild(td2Element);
      td3Element = document.createElement("td");
      td3Element.textContent = grades[tbodyChildren.length].grade;
      thElement.appendChild(td3Element);
      tbodyElement.appendChild(thElement);
    }
  }
}
