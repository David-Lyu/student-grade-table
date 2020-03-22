class GradeTable {
  constructor(tableElement,noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades,renderGradeRow) {
    var tbodyElement = this.tableElement.querySelector("tbody");
    tbodyElement.innerHTML = "";
    var pElement = document.querySelector("p");
    var td4Element;
      if(grades.length != 0) {
        pElement.classList.add("d-none")
        for (var gradesIndex = 0; gradesIndex < grades.length; gradesIndex++) {
        var trElement = document.createElement("tr");
        var td1Element = document.createElement("td");
        trElement.appendChild(td1Element);
        td1Element.textContent = grades[gradesIndex].name;
        var td2Element = document.createElement("td");
        td2Element.textContent = grades[gradesIndex].course;
        trElement.appendChild(td2Element);
        var td3Element = document.createElement("td");
        td3Element.textContent = grades[gradesIndex].grade;
        trElement.appendChild(td3Element);
        this.renderGradeRow(grades[gradesIndex],trElement,this.deleteGrade);
        tbodyElement.appendChild(trElement)

        }
      }else {
        pElement.classList.remove("d-none")
      }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data,trElement,deleteGrade){
    this.single = data;
    var td4Element = document.createElement("td");
    var tdDeleteButton = document.createElement("button");
    tdDeleteButton.classList.add("btn", "btn-danger");
    tdDeleteButton.textContent = "DELETE";
    td4Element.appendChild(tdDeleteButton);
    trElement.appendChild(td4Element)
    tdDeleteButton.addEventListener("click",function(){
      deleteGrade(data.id)
    })
    return td4Element;
  }
}
