(function(){
     const pics = ['1','2','3','4','5','6','7','8','9'];
     const btns = document.querySelectorAll('.btn');
     let pic = document.querySelector('.box');
     let ct=0;
     btns.forEach(function(button){
        button.addEventListener('click',(e)=>{
            if(button.classList.contains('btn-left')){
                console.log(('left btn is working'))
             ct--; 
             if(ct<0) ct=pics.length-1;
             pic.style.backgound = `url('photo/${pics[ct]}.jpg')`  
            }
            if(button.classList.contains('btn-right')){
                console.log(('right btn is working'))
                ct++;
                if(ct>=pics.length) ct=0;
                pic.style.backgound = `url('photo/${pics[ct]}.jpg')` 
            }
        })
     })
})
// photo\2.jpg