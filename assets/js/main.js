const $form = document.querySelector('#form');
const $userName = document.querySelector('#user_name');
const $userEmail = document.querySelector('#user_email');
const $userSurname = document.querySelector('#user_surname');
const $userPassword = document.querySelector('#user_password');
const $rightContainer = document.querySelector('.container__right');
const $item = document.querySelector('.item');
const $content = document.querySelector('.content');
const $title = document.querySelector('.title');
const $span1 = document.querySelector('.span1');
const $span2 = document.querySelector('.span2');
const $span3 = document.querySelector('.span3');
// const $btns = document.querySelector('.content--btns');
// const $yes = document.querySelector('#yes');
// const $no = document.querySelector('#no');

$form.addEventListener('submit', (e)=>{
    e.preventDefault();
    $item.style.display = 'none';
    // $rightContainer.classList.add('content');
    $content.style.display = 'block';

    $content.innerHTML += `
    <h4>Your name: ${$userName.value}</h4>
    <h4>Your surname: ${$userSurname.value}</h4>
    <h4>Your email: ${$userEmail.value}</h4>
    `;
    $title.style.marginTop = '10px';

    
    // $btns.addEventListener('click', (e)=>{
    //     console.log(e.target);
    // });
});
$userName.addEventListener('input', (e)=>{
    let value = e.target.value;
    if(value.length < 4){
        $span1.style.display = 'block';
    }else{
        $span1.style.display = 'none';
    }
});

$userSurname.addEventListener('input', (e)=>{
    let value = e.target.value;
    if(value.length < 4){
        $span2.style.display = 'block';
    }else{
        $span2.style.display = 'none';
    }
});

$userPassword.addEventListener('input', (e)=>{
    let value = e.target.value;
    if(value.length < 8){
        $span3.style.display = 'block';
    }else{
        $span3.style.display = 'none';
    }
});