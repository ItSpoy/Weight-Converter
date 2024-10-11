const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");

let errortime ;
let resulttime ;

function updateresults(){
    if(inputEl.value <= 0 || isNaN(inputEl.value)){
        errorEl.innerText="Please Enter A Valid Number !";
        clearTimeout(errortime);
        errortime = setTimeout(()=>{
            errorEl.innerText ="";
            inputEl.value ="" ;

        },2000);
    }else{
        resultEl.innerText = (+inputEl.value / 2.2 ).toFixed(2);
        clearTimeout(resulttime);
        resulttime = setTimeout(()=>{
            resultEl.innerText = "" ;
            inputEl.value = "" ;
        },10000)
    }
}
inputEl.addEventListener("input",updateresults);