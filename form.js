/**
 * form.js validates the first name, last name, and email of the form.html
 * page form. It also displays animated text based on user selections for reason
 * for contacting via the form.
 */


// function validateForm define const 3 functions names take input params
function validateForm(){
    const fname = validateName('firstName','First');
    const lname = validateName('lastName','Last');
    const email = validateEmail();
    // if all 3 of the functions return true, validateForm() returns true
    return (fname && lname && email) ;
}


// validateFirstName, validates the first name entry
function validateName(field,text){
    // define const el and error_el from form
    const el = document.forms['contactForm'][field];
    const error_el = document.getElementById(`${text.toLowerCase()}-name-invalid`);

    // const alpha tests if firstName is from a-z or A-Z
    const alpha = /^[a-zA-Z]+$/.test(el.value);
    // if el length is less than two or not alpha is false
    if ( el.value.length < 2 || !alpha ){
        // error_el. innerHTML $text and string
        error_el.innerHTML = 
        `${text} Name must be at least two characters and contain only alpha 
        characters (A-Z and a-z). 
        Please provide a valid ${text.toLowerCase()} name.`
        // style border
         el.style.border = "solid black"
         // return false
         return false;
    }
    // else statment
    else{
        // error_el string empty
        error_el.innerHTML = ""
        // el style border none
        el.style.border = ""
        // return true
        return true;
    }
}

// validateEmail, validates the email entry
function validateEmail(){
    // const email = value from form in email
    const email = (document.forms['contactForm']['email'].value)
    // if regex test on email returns true
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        // get element by id and display nothing
        document.getElementById("email-invalid").innerHTML = ""
        // get element by id and display no additional border
        document.getElementById("email").style.border = ""
        // return true
        return true;
    }
    // else statement
    else{
        // get element by id and display string
        document.getElementById("email-invalid").innerHTML=
        "Invalid email address. Please provide a valid email address."
        // get element by id and create border around element
        document.getElementById("email").style.border = "solid black"
        // return false
        return false;
    }
}


/* 
functions for reasons to contact to display each when checked
all use get element by id.checked boolean display reason if true
else if false does not display
*/
function validateCareer(){
    if (document.getElementById("career").checked){
        document.getElementById("reason-career").innerHTML = 
        "&#9745 Career";
    }
    else{
        document.getElementById("reason-career").innerHTML = "";
    }
}

function validateWebsite(){
    if (document.getElementById("website").checked){
        document.getElementById("reason-website").innerHTML = 
        "&#9745 Website";
    }
    else{
        document.getElementById("reason-website").innerHTML = "";
    }
}

function validateGeneral(){
    if (document.getElementById("general").checked){
        document.getElementById("reason-general").innerHTML = 
        "&#9745 General Inquiry";
    }
    else{
        document.getElementById("reason-general").innerHTML = "";
    }
}
function validateOther(){
    if (document.getElementById("other").checked){
        document.getElementById("reason-other").innerHTML = 
        "&#9745 Other";
    }
    else{
        document.getElementById("reason-other").innerHTML = "";
    }
}
