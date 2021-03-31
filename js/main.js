(function (){
    const header = document.querySelector('.header');
    window.onscroll = () => {
         if(window.pageYOffset > 80){
             header.classList.add('header_active')
         }
         else{
            header.classList.remove('header_active')
         }
    }
}());

//Animate Rectangle
(function (){
    window.onload = () => {
        for(let i=1; i<17 ; i++)
        {
        document.getElementById("rectangle" + i).className="rectangle" + i + "_animate";
       }
    }
}
()
);