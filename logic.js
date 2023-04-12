let monto = document.querySelector('.bill'); 
let billNumber = parseInt(monto.value); 
let numeroP = document.querySelector('.number'); 
let peopleNumber = parseInt(numeroP.value);
let buttons = document.querySelectorAll('.botones'); 

let tipResult = document.getElementById('ver'); 
let tipLest;
let totalResult = document.getElementById('show'); 
let resultLest; 

let PropinaDada = document.querySelector('.cuanto');

let tipValu = 0;

buttons.forEach(elementos =>{

      elementos.addEventListener('click', event=>{
            

            tipValu = (event.target.innerText.slice(0,-1)); 
            tipValudos = (event.target.innerHTML);

            calculateTips();
      });

}); 

//update of the amount
monto.addEventListener('input',()=>{

      billNumber = parseFloat(monto.value);

      calculateTips();
}); 

//update of the number of people 
numeroP.addEventListener('input', ()=>{

      peopleNumber = parseInt(numeroP.value);

      calculateTips();
});

//Update custom button
let personalizado = document.querySelector('.custom');
personalizado.addEventListener('input', ()=>{

      tipValu = parseInt(personalizado.value); 
      tipValudos = parseInt(personalizado.value);

      if(isNaN(tipValu)){


      }
      else{

            calculateTips();
      }
});

function calculateTips(){

      PropinaDada.innerText = (tipValu + '%');

      if(peopleNumber > 0){

            //calculation of Tip amount 
            tipLest = ((billNumber * tipValu) /100) / peopleNumber
            tipResult.innerText = ('$' + tipLest.toFixed(2));
            
            //calculation of Tip
            resultLest = (((billNumber * tipValu) / 100) + billNumber) / peopleNumber;
            totalResult.innerText = ('$' + resultLest.toFixed(2));  
            
      }
      else{

            //just wait...
      }
};

//-------------------------------------------------------------------------------------------

//Area of the code where the alert that the number of 
//people cannot be zero is thrown...

numeroP.addEventListener('keyup', e=>{

      e.preventDefault;

      if(numeroP.value.length == 0){

            document.getElementById('personas').style.border = "2px solid rgb(255, 56, 56)"
            document.getElementById('personas').style.backgroundImage = "url(imagenes/icono-error.svg)"
            document.getElementById('warning-uno').style.display = 'block';
      }
      else{

            document.getElementById('personas').style.border = "none"
            document.getElementById('personas').style.backgroundImage = "url(imagenes/icon-person.svg)"
            document.getElementById('warning-uno').style.display = 'none';
      }
}); 

//reset btn 
let resetBtn = document.querySelector('.reset'); 

resetBtn.addEventListener('click', () =>{

      monto.value = ''; 
      billNumber = 0;
      numeroP.value = '';
      peopleNumber = 0;
      personalizado.value = '';
      tipValu = 0;  
      tipResult.value = ('$' + 0); 
      tipLest = 0;
      totalResult.value= ('$' + 0); 
      resultLest = 0; 
      PropinaDada.value = (0 + '%');
}); 