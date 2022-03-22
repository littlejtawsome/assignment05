//step1. 양식에 엑세스. 아이디를  불러와서  선언
let form  = document.getElementById('empForm'); 
let id = document.getElementById('id');
let name = document.getElementById('name');
let ext = document.getElementById('ext');
let email = document.getElementById('email');
let department = document.getElementById('department');
//2. 폼을 불러서 이벤트 서밋이 괄호안의 펑션을 행한다.
window.addEventListener('load', init, false)
   function init(){
       "use strict";
   form.addEventListener("submit", () => {
        console.log('id: '+  id.value);
        console.log('name: ' + name.value);
        console.log('ext: '+ ext.value);
        console.log('email: ' + email.value);
        console.log('department: ' + department.value);
        event.preventDefault();  
});
}

