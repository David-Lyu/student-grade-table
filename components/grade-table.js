class GradeTable {
  constructor(tableElement,noGradesElement,formElement,aside) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.formElement = formElement;
    this.aside = aside;
    this.button = this.formElement.querySelectorAll("button");
    this.asideHeading = this.aside.querySelectorAll("h3");
    this.onEditClick = this.onEditClick.bind(this);
    this.boundOnOperationClick = this.onOperationClick.bind(this);
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
        this.renderGradeRow(grades[gradesIndex],trElement,this.deleteGrade,this.editGrades,this.onEditClick);
        tbodyElement.appendChild(trElement)

        }
      }else {
        pElement.classList.remove("d-none")
      }
  }
  onOperationClick(deleteGrade,editGrades) {
    this.deleteGrade = deleteGrade;
    this.editGrades = editGrades;
  }
  renderGradeRow(data,trElement,deleteGrade,editGrades,onEditClick){
    this.single = data;
    this.td4Element = document.createElement("td");
    this.iconDeleteButton = document.createElement("i");
    this.iconEditButton = document.createElement("i");
    this.iconEditButton.classList.add("btn", "btn-warning", "far","fa-edit");
    this.iconDeleteButton.classList.add("btn", "btn-danger","far","fa-trash-alt");
    this.td4Element.appendChild(this.iconEditButton);
    this.td4Element.appendChild(this.iconDeleteButton);
    trElement.appendChild(this.td4Element)
    this.iconEditButton.addEventListener("click",function(){
      onEditClick(data)});
    this.iconDeleteButton.addEventListener("click",function(){
      deleteGrade(data.id)
    })
  }

  onEditClick(data) {
    this.id = data.id
    this.button[0].classList.add("d-none");
    this.button[1].classList.remove("d-none");
    this.asideHeading[0].classList.add("d-none");
    this.asideHeading[1].classList.remove("d-none");
  }
}
