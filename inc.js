(function (){
    const buttons = document.querySelectorAll('.btn');
    const value = document.querySelector('.num');
    let count = 0;

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function(){
            if(btn.classList.contains('btn-dec')){
                count--;
            }

            if(btn.classList.contains('btn-inc')){
                count++;
            }

            value.textContent = count;
        
            if(count<0){
                value.style.color = 'red';
            }
            if(count>0){
                value.style.color='green';
            }

            if(ct===0){
                value.style.color = 'black';
            }
        })

    })

})();