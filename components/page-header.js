class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }

  updateAverage(newAverage) {
    if(newAverage) {
    this.headerElement.textContent = newAverage;
    }else {
      this.headerElement.textContent = 0;
    }
  }
}
