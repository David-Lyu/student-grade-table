class GradeForm {
  constructor(formElement) {
    this.formElement = formElement
    this.boundHandleSubmit = this.handleSubmit.bind(this)
    this.formElement.addEventListener("submit",this.boundHandleSubmit)
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.formData = new FormData(event.target)
    this.formName = this.formData.get("name")
    this.formCourse = this.formData.get("course")
    this.formGrade = this.formData.get("grade")
    // if(formElement === )check to see action
    this.createGrade(this.formName,this.formCourse,this.formGrade)
    event.target.reset();
  }
}
