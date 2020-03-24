class App {

  constructor(gradeTable,pageHeader,gradeForm,formElement) {
    this.bindHandleGetGradesError = this.handleGetGradesError.bind(this);
    this.bindHandleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.formElement = formElement;
    this.buttonSave = formElement.querySelector("button")
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
    this.gradeTable.updateGrades(this.cacheGradeArray,this.cacheGradeDelete);
    this.gradeForm.onSubmit(this.cacheGradeArray,this.gradeTable,this.cacheGradeEdit,this.cacheGradeAdd,this.cacheGradeDelete)
    var averages = 0;
    for(var averageIndex = 0; averageIndex < grades.length; averageIndex++) {
      averages += grades[averageIndex].grade
    }
    averages = Math.round(averages/grades.length);
    this.pageHeader.updateAverage(averages);
    this.buttonSave.addEventListener("click",this.callOnServer)

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
    console.log("added data has been saved")
  }

  start() {
    this.getGrades();
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
    console.log("deleted data has been saved")
  }

  editGrade(id, name, course, grade) {
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
    console.log("edited data has been saved")
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

  callOnServer() {
    if(this.cacheGradeAdd.length > 0) {
      var addTemp;
      for(var putInServerIndex = 0; putInServerIndex < this.cacheGradeAdd.length; putInServerIndex++){
        addTemp = this.cacheGradeAdd[putInServerIndex]
        this.createGrade(addTemp.name, addTemp.course, addTemp.grade)
      }
    }
    if(this.cacheGradeDelete.length > 0) {
      var deleteTemp;
      for(var deleteInServerIndex = 0; deleteInServerIndex < this.cacheGradeDelete.length; deleteInServerIndex++) {
        deleteTemp = this.cacheGradeDelete[deleteInServerIndex]
        this.deleteGrade(deleteTemp.id)
      }
    }
    if(this.cacheGradeEdit.length > 0) {
      var editTemp;
      for(var editInServerIndex = 0; editInServerIndex < this.cacheGradeEdit.length; editInServerIndex++) {
        editTemp = this.cacheGradeEdit[editInServerIndex];
        this.editGrade(editTemp.id,editTemp.name,editTemp.course,editTemp.grade)
      }
    }
  }
}
