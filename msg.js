(function (){


     let btn = document.querySelector('#btn');
     let output =  document.querySelector('.msg-content');
     let input =  document.querySelector('#msg')
     let feedback = document.querySelector('.feedback')

     btn.addEventListener('click', function(e){
        e.preventDefault();
        if(input.value === ''){
            feedback.classList.add('show');
             setTimeout(()=>{
        feedback.classList.remove('show');
             },2000);
        }

        else{
            output.textContent = input.value;
           output.value = ''; 
           input.value = '';
        }
     })
})();