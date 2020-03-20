class App {

  constructor(gradeTable) {
    this.bindHandleGetGradesError = this.handleGetGradesError.bind(this);
    this.bindHandleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
  }

  handleGetGradesError(error) {
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
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

  start() {
    this.getGrades();
  }
}
