class App {

  constructor(gradeTable,pageHeader,gradeForm) {
    this.bindHandleGetGradesError = this.handleGetGradesError.bind(this);
    this.bindHandleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.boundCreateGrades = this.createGrade.bind(this);
    this.bindHandleCreateGradesError = this.handleCreateGradeError.bind(this);
    this.bindHandleCreateGradesSuccess = this.handleCreateGradeSuccess.bind(this);
    this.boundDeleteGrade = this.deleteGrade.bind(this);
    this.bindHandleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.bindHandleDeleteGradeError = this.handleDeleteGradeError.bind(this);
  }

  handleGetGradesError(error) {
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
    var averages = 0;
    for(var averageIndex = 0; averageIndex < grades.length; averageIndex++) {
      averages += grades[averageIndex].grade
    }
    averages = averages/grades.length;
    this.pageHeader.updateAverage(averages);
  }

  getGrades() {
    jQuery.ajax(
      {
        headers: {
          "X-Access-Token": "PPW7pOdc"
        },
        method: "GET",
        url: "https://sgt.lfzprototypes.com/api/grades",
        data: "none",
        success: this.bindHandleGetGradesSuccess,
        error: this.bindHandleGetGradesError
      }
    )
  }

  createGrade(name,course,grade) {
    $.ajax(
      {
        headers: {
          "X-Access-Token": "PPW7pOdc"
        },
        method: "POST",
        url: "https://sgt.lfzprototypes.com/api/grades",
        data:
          {
            "name": name,
            "course": course,
            "grade": grade,
          },
        success: this.bindHandleCreateGradesSuccess,
        error: this.bindHandleCreateGradesError
      }
    )
  }

  handleCreateGradeError(error) {
    console.error(error);
  }

  handleCreateGradeSuccess(){
    this.getGrades();
  }

  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.boundCreateGrades)
    this.gradeTable.onDeleteClick(this.boundDeleteGrade)
  }

  deleteGrade(id) {
    console.log(id);
    $.ajax(
      {
        headers: {
          "X-Access-Token": "PPW7pOdc"
        },
        method: "DELETE",
        url: "https://sgt.lfzprototypes.com/api/grades/:grade_id",
        Data: "none",
        success: this.bindHandleDeleteGradeSuccess,
        error: this.bindHandleDeleteGradeError
      }
    )
  }

  handleDeleteGradeError(error) {
    console.error(error);
  }

  handleDeleteGradeSuccess(){
    this.getGrades();
  }
}
