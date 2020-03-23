class GradeForm {
  constructor(formElement,aside) {
    this.formElement = formElement
    this.asideElement = aside;
    this.buttonFromFormEle = this.formElement.querySelectorAll("button");
    this.asideElementHeading = this.asideElement.querySelectorAll("h3");
    this.boundHandleSubmit = this.handleSubmit.bind(this);
    this.boundHandleCancel = this.handleCancel.bind(this);
    this.formElement.addEventListener("submit",this.boundHandleSubmit);
    this.buttonFromFormEle[2].addEventListener("click",this.boundHandleCancel)
  }
  onSubmit(createGrade,editGrade,gradeTable) {
    this.createGrade = createGrade;
    this.editGrade = editGrade;
    this.gradeTable = gradeTable;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.formData = new FormData(event.target)
    this.formName = this.formData.get("name")
    this.formCourse = this.formData.get("course")
    this.formGrade = this.formData.get("grade")
    if(!this.buttonFromFormEle[0].classList.contains("d-none")) {
      this.createGrade(this.formName, this.formCourse, this.formGrade)
    } else {
      this.editGrade(this.gradeTable.id,this.formName,this.formCourse,this.formGrade)
      this.buttonFromFormEle[0].classList.remove("d-none");
      this.buttonFromFormEle[1].classList.add("d-none");
      this.asideElementHeading[0].classList.remove("d-none");
      this.asideElementHeading[1].classList.add("d-none");

    }

    event.target.reset();
  }

  handleCancel() {
      this.buttonFromFormEle[0].classList.remove("d-none");
      this.buttonFromFormEle[1].classList.add("d-none");
      this.asideElementHeading[0].classList.remove("d-none");
      this.asideElementHeading[1].classList.add("d-none");
    }
}
