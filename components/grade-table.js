class GradeTable {
  constructor(tableElement,noGradesElement,formElement,aside) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.formElement = formElement;
    this.aside = aside;
    this.button = this.formElement.querySelectorAll("button");
    this.asideHeading = this.aside.querySelectorAll("h3");
    this.onEditClick = this.onEditClick.bind(this);
    this.updateGrades = this.updateGrades.bind(this)
  }
  updateGrades(grades,deleteGradeArray) {
    this.tbodyElement = this.tableElement.querySelector("tbody");
    this.tbodyElement.innerHTML = "";
    this.pElement = document.querySelector("p");
    this.td4Element;
      if(grades.length != 0) {
        this.pElement.classList.add("d-none")
        for (var gradesIndex = 0; gradesIndex < grades.length; gradesIndex++) {
        grades[gradesIndex].value = gradesIndex;
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
        this.renderGradeRow(grades[gradesIndex],trElement,deleteGradeArray,this.onEditClick,grades,this.updateGrades);
        this.tbodyElement.appendChild(trElement)

        }
      }else {
        this.pElement.classList.remove("d-none")
      }
  }
  onOperationClick(deleteGradeArray) {
    this.deleteGradeArray = deleteGradeArray;
  }

  renderGradeRow(data,trElement,deleteGradeArray,onEditClick,grades,updateGrades){
    this.single = data;
    this.deleteGradeArray = deleteGradeArray
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
      if(data.id){
        deleteGradeArray.push(data);
        grades.splice(data.value,1)
        updateGrades(grades,deleteGradeArray)
      }else {
        grades.splice(data.value,1)
        updateGrades(grades,deleteGradeArray)
      }
    })
  }

  onEditClick(data) {
    this.data = data;
    this.button[1].classList.add("d-none");
    this.button[2].classList.remove("d-none");
    this.asideHeading[0].classList.add("d-none");
    this.asideHeading[1].classList.remove("d-none");
  }
}
