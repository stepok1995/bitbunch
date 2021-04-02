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
//Burger handleer
(function(){
    const BurgerItem = document.querySelector('.burger');
    const Header_nav = document.querySelector('.header__nav');
    const Close_nav = document.querySelector('.header__nav-close');
    const btn_signIn = document.querySelector('.signin_button');
    const btn_Register = document.querySelector('.register__button');
    BurgerItem.addEventListener('click', () => {
        Header_nav.classList.add('header__nav_active'); 
        btn_signIn.classList.add('signin_button_active');
        btn_Register.classList.add('register__button_active');
    });
    Close_nav.addEventListener('click', () => {
        Header_nav.classList.remove('header__nav_active'); 
        btn_signIn.classList.remove('signin_button_active');
        btn_Register.classList.remove('register__button_active');
    });
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

    var popup = document.querySelector(".popup__overlay");
    var popup_second = document.querySelector(".popup__overlay-second");   
    var btn = document.querySelector(".intro_button");
    var close = document.querySelector(".close");
    var close_second = document.querySelector(".grid-close__form-second");
    var btn_form_second = document.querySelector(".grid-form__button");


    btn.addEventListener("click", function(event){
        event.preventDefault();
        popup.classList.remove("hidden");
    });

    popup.addEventListener("click", function(event) {
      e = event || window.event
      if (e.target == this) {
        popup.classList.add("hidden");
      }
    });

    close.addEventListener("click", function(event){
        event.preventDefault();
        popup.classList.add("hidden");
    });

    popup_second.addEventListener("click", function(event) {
        e = event || window.event
        if (e.target == this) {
          popup_second.classList.add("hidden-second");
        }
      });
  
    close_second.addEventListener("click", function(event){
          event.preventDefault();
          popup_second.classList.add("hidden-second");
      });

      btn_form_second.addEventListener("click", function(event){
        event.preventDefault();
        popup_second.classList.add("hidden-second");
    });
   


function formValidation()
{
    var email = document.support.email;
    var name = document.support.name;
    var popup_second = document.querySelector(".popup__overlay-second");
    if(ValidateEmail(email))
    {
    if(ValidateName(name))
    {
    if(ValidateText(text))
    {
        console.log('second');
     var user_name = document.getElementById('name').value;
     document.getElementById('user_name').innerHTML = user_name;
            (function(){
            popup_second.classList.remove("hidden-second");
        }());

      (function(){
           
              popup.classList.add("hidden");
            }()
          );
      
    }
    }
    }
    return false;    
}

function ValidateEmail(email)
{
    var mailformat = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    if(email.value.match(mailformat))
    {
        console.log('true');
    return true;
    }
    else
    {
    document.getElementById("Email-red_line").classList.add('red_line');    
    document.getElementById("Email__novalid").className="text__novalid";
    email.focus();
    return false;
    }
}

function ValidateName(name)
{ 
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters))
    {
        console.log('что?');
    return true;
    }
    else
    {
    document.getElementById("Name-red_line").classList.add('red_line');
    document.getElementById("Name__novalid").className="text__novalid";
    name.focus();
    return false;
    }
}

function ValidateText(text)
{ 
    var letters = /^[A-Za-z]+$/;
    if(text.value.match(letters))
    {
    return true;
    }
    else
    {
    document.getElementById("Describe-red_line").classList.add('red_line');
    document.getElementById("Describe__novalid").className = "text__novalid";
    text.focus();
    return false;
    }
}
