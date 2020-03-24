class GradeForm {
  constructor(formElement,aside) {
    this.formElement = formElement
    this.asideElement = aside;
    this.buttonFromFormEle = this.formElement.querySelectorAll("button");
    this.asideElementHeading = this.asideElement.querySelectorAll("h3");
    this.boundHandleSubmit = this.handleSubmit.bind(this);
    this.boundHandleCancel = this.handleCancel.bind(this);
    this.boundOnSubmit = this.onSubmit.bind(this);
    this.formElement.addEventListener("submit",this.boundHandleSubmit);
    this.buttonFromFormEle[3].addEventListener("click",this.boundHandleCancel)
  }
  onSubmit(createGrade,gradeTable,editArray,addGradeToServer,cacheGradeDelete) {
    this.createGrade = createGrade;
    this.gradeTable = gradeTable;
    this.cacheEditArray = editArray;
    this.cacheGradeAdd = addGradeToServer;
    this.cacheGradeDelete = cacheGradeDelete;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.formData = new FormData(event.target)
    var name = this.formData.get("name")
    var course = this.formData.get("course")
    var grade = this.formData.get("grade")
    if(!this.buttonFromFormEle[1].classList.contains("d-none")) {
      this.addingObj = {name,course,grade}
      this.cacheGradeAdd.push(this.addingObj)
      this.createGrade.push(this.addingObj)
      this.gradeTable.updateGrades(this.createGrade,this.cacheGradeDelete)
    } else {
      this.gradeTable.data.name = name;
      this.gradeTable.data.course = course;
      this.gradeTable.data.grade = grade;
      this.gradeTable.updateGrades(this.createGrade,this.cacheGradeDelete)
      var newObj = { id: this.gradeTable.data.id,name, course, grade}
      if(this.gradeTable.data.id) {
        this.cacheEditArray.push(newObj);
      }
      this.buttonFromFormEle[1].classList.remove("d-none");
      this.buttonFromFormEle[2].classList.add("d-none");
      this.asideElementHeading[0].classList.remove("d-none");
      this.asideElementHeading[1].classList.add("d-none");

    }

    event.target.reset();
  }

  handleCancel() {
      this.buttonFromFormEle[1].classList.remove("d-none");
      this.buttonFromFormEle[2].classList.add("d-none");
      this.asideElementHeading[0].classList.remove("d-none");
      this.asideElementHeading[1].classList.add("d-none");
    }
}
