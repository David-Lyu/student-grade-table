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
    this.boundEditGrade = this.editGrade.bind(this);
    this.bindHandleEditGradeSuccess = this.handleEditGradeSuccess.bind(this);
    this.bindHandleEditGradeError = this.handleDeleteGradeError.bind(this);
    this.boundCacheGrade = this.cacheGrade.bind(this)
  }

  handleGetGradesError(error) {
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    this.cacheGrade(grades);
    this.gradeTable.updateGrades(this.cacheGradeArray);
    this.gradeForm.onSubmit(this.cacheGradeArray,this.boundEditGrade,this.gradeTable)
    var averages = 0;
    for(var averageIndex = 0; averageIndex < grades.length; averageIndex++) {
      averages += grades[averageIndex].grade
    }
    averages = Math.round(averages/grades.length);
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
    this.gradeTable.onOperationClick(this.boundDeleteGrade)
  }

  deleteGrade(id) {
    $.ajax(
      {
        headers: {
          "X-Access-Token": "PPW7pOdc"
        },
        method: "DELETE",
        url: "https://sgt.lfzprototypes.com/api/grades/"+id,
        data: "none",
        success: this.bindHandleDeleteGradeSuccess,
        error: this.bindHandleDeleteGradeError
      }
    )
  }

  handleDeleteGradeError(error) {
    console.error(error);
  }

  handleDeleteGradeSuccess() {
    this.getGrades();
  }

  editGrade(id, name, course, grade) {
    console.log(id, name, course, grade);
    $.ajax(
      {
        headers: {
          "X-Access-Token": "PPW7pOdc"
        },
        method: "PATCH",
        url: "https://sgt.lfzprototypes.com/api/grades/" + id,
        data: {
          "name": name,
          "course": course,
          "grade": grade
        },
        success: this.bindHandleEditGradeSuccess,
        error: this.bindHandleEditGradeError
      }
    )
  }

  handleEditGradeError(error) {
    console.error(error);
  }

  handleEditGradeSuccess() {
    this.getGrades();
  }

  cacheGrade(grade) {
    this.cacheGradeArray = [];
    for(var storeGradeIndex = 0; storeGradeIndex < grade.length; storeGradeIndex++) {
      this.cacheGradeArray[storeGradeIndex] = grade[storeGradeIndex];
    }
    this.cacheGradeAdd = [];
    this.cacheGradeDelete = [];
    this.cacheGradeEdit = [];
  }
}
