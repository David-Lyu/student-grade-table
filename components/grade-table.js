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
  renderGradeRow(data,trElement,deleteGrade,editGrade){
    this.single = data;
    var td4Element = document.createElement("td");
    var iconDeleteButton = document.createElement("i");
    var iconEditButton = document.createElement("i");
    iconEditButton.classList.add("btn", "btn-warning", "far","fa-edit");
    iconDeleteButton.classList.add("btn", "btn-danger","far","fa-trash-alt");
    td4Element.appendChild(iconEditButton);
    td4Element.appendChild(iconDeleteButton);
    trElement.appendChild(td4Element)
    iconEditButton.addEventListener("click",function() {
      editGrade(data.id)
    })
    iconDeleteButton.addEventListener("click",function(){
      deleteGrade(data.id)
    })
    return td4Element;
  }

  onEditClick(editGrade) {
    this.EditGrade = editGrade;
  }
}
