class GradeTable {
  constructor(tableElement,noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades,renderGradeRow) {
    var tbodyElement = this.tableElement.querySelector("tbody");
    tbodyElement.innerHTML = "";
    var pElement = document.querySelector("p");
      if(grades.length != 0) {
        pElement.classList.add("d-none")
        for (var gradesIndex = 0; gradesIndex < grades.length; gradesIndex++) {
        this.renderGradeRow();
        td1Element.textContent = grades[gradesIndex].name;
        td2Element.textContent = grades[gradesIndex].course;
        td3Element.textContent = grades[gradesIndex].grade;
        tbodyElement.appendChild(trElement)
        this.deleteGrade;
        }
      }else {
        pElement.classList.remove("d-none")
      }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data,deleteGrade){
    this.single = data;
    function deleteGrade(){console.log("hello")}
      var trElement = document.createElement("tr");
      var td1Element = document.createElement("td");
      trElement.appendChild(td1Element);
      var td2Element = document.createElement("td");
      trElement.appendChild(td2Element);
      var td3Element = document.createElement("td");
      trElement.appendChild(td3Element);
      var td4Element = document.createElement("tr");
      var tdDeleteButton = document.createElement("button");
      tdDeleteButton.classList.add("btn,btn-danger");
      tdDeleteButton.textContent = "DELETE";
      td4Element.appendChild(tdDeleteButton);
      trElement.appendChild(td4Element);
      tdDeleteButton.addEventListener("click", deleteGrade(this.single))
      return {trElement,td1Element,td2Element,td3Element};
  }
}
