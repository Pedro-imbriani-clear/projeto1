class CalcController{

    constructor(){

        this._displayCalc = "0";
        this._currentDate;
        this.initiazile();
    }
    initiazile(){

     let displayCalcEl =  document.querySelector("#display"); 
     let dateEl = document.querySelector("#data");
     let timeEl =  document.querySelector("#hora");
        displayCalcEl.innerHTML = "756"
        dateEl.innerHTML = "20/04/2022"
        timeEl.innerHTML = "21:30"

    }
    get displayCalc(){

        return this._displayCalc;
    }
    set displayCalc(valor){
        this._displayCalc = valor;
    }
    get currentDate(){
        return this._currentDate;

    }
    set currentDate(valor){

    this._currentDate = valor
    }
}