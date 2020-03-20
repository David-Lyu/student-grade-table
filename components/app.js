class App {

  handleGetGradesError(error){
    console.error(error);
  }

  handleGetGradesSuccess(grades){
    console.log(grades);
  }

  constructor(){
    this.bindHandleGetGradesError = this.handleGetGradesError.bind(this);
    this.bindHandleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }

  getGrades(){
    jQuery.ajax(
      {
        method: "GET",
        URL: "https://github.com/Learning-Fuze/sgt_api#get-all-grades",
        Success: this.bindHandleGetGradesSuccess,
        Error: this.bindHandleGetGradesError
      }
    )
  }
}
