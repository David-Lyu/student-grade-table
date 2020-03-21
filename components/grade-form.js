class GradeForm {
  constructor(formElement) {
    this.formElement = formElement
    this.boundHandleSubmit = handleSubmit.bound(this)
    this.formElement(this.boundHandleSubmit)
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    preventDefault();
    console.log("Hi =)")
  }
}
