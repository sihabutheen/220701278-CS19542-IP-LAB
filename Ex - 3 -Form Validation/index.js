const validate = (event) => {
    event.preventDefault()
    const name = document.getElementById('name');
    const roll_no = document.getElementById('roll_no');
    const gender = document.getElementsByName('gender');
    const year = document.getElementById('year').value;
    const dept = document.getElementById('dept');
    const section = document.getElementById('section');
    const mobile_number = document.getElementById('mobile_number');
    const email = document.getElementById('email');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const country = document.getElementById('country');
    const p_code = document.getElementById('p_code');
    const error_e = document.getElementById('error');
    var error = false;

    console.log("submitted !!!")
    console.log(roll_no.value.length != 9)
    if(name.value == "")
    {
        name.style.borderColor = 'red';
        error =true ;
    }else name.style.borderColor = 'black';
    if(gender[0].checked || gender[1].checked)
    {
        error = true;
    }
    if(roll_no.value.length != 9)
    {
        console.log(roll_no.value)
        roll_no.style.borderColor = 'red';
        error =true ;
    }else roll_no.style.borderColor = 'black';
    if(mobile_number.length != 10)
    {
        mobile_number.style.borderColor = 'red';
        error =true ;
    }else mobile_number.style.borderColor = 'black';
    if(email.value.indexOf('@') < email.value.indexOf('.')+1 || email.value.indexOf('@')==0 || email.value.indexOf('.')+1==email.value.length)
    {
        email.style.borderColor = 'red';
        error =true ;
    }else email.style.borderColor = 'black';
    if(p_code.value.length != 6){
        p_code.style.borderColor = 'red';
        error =true ;
    }else p_code.style.borderColor = 'black';

    if(error)
    {
        error_e.innerHTML="Please provide the correct value !";
        error_e.style.backgroundColor = 'red';
    }
}