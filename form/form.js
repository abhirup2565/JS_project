//initalizing element
const form = document.getElementById('contact-form');
const input_first_name = document.getElementById('first_name');
const input_last_name = document.getElementById('last_name');
const input_email = document.getElementById('email');
const input_feedback = document.getElementById('feedback');
const error_first_name = document.getElementById('error_first_name');
const error_last_name = document.getElementById('error_last_name');
const error_email = document.getElementById('error_email');
const error_feedback = document.getElementById('error_feedback');
//declaring varialbes
let first_name="";
let last_name="";
let email="";
let feedback="";

input_first_name.addEventListener("change",(event)=>
{
    first_name=event.target.value;
})

input_last_name.addEventListener("change",(event)=>
{
    last_name=event.target.value;
})

input_email.addEventListener("change",(event)=>
{
    email=event.target.value;
})

input_feedback.addEventListener("change",(event)=>
{
    feedback=event.target.value;
})


form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    validationErrors = validation();
    if( validationErrors.length === 0)
    {
        console.log("form submitted");
    }
    else{
        console.log("form not completed"); 
    }
})

//Helper functions

const validation = ()=>
{
    let errorsArray=[];
    if(first_name.length==0)
    {
        errorsArray.push("empty first name");
        setErrors(input_first_name,error_first_name,"First Name cannot be empty");
    }
    else
    {
        removeErrors(input_first_name,error_first_name);
    }
    if(last_name.length==0)
    {
        errorsArray.push("empty last name");
        setErrors(input_last_name,error_last_name,"Last Name cannot be empty");
    }
    else
    {
        removeErrors(input_last_name,error_last_name);
    }
    if(email.length==0)
    {
        errorsArray.push("empty email");
        setErrors(input_email,error_email,"Email cannot be empty");
    }
    else if(!email.includes('@'))
    {
        errorsArray.push("email format incorrect");
        setErrors(input_email,error_email,"Email format incorrect");
    }
    else
    {
        removeErrors(input_email,error_email);
    }    
    if(feedback.length==0)
    {
        errorsArray.push("empty Feedback");
        setErrors(input_feedback,error_feedback,"Feedback cannot be empty");
    }
    else
    {
        removeErrors(input_feedback,error_feedback);
    }
    console.log(errorsArray);
    return errorsArray;
}

const setErrors = (input,error_span,message)=>
{
    error_span.textContent=message;
    input.style.border = '1px solid red'; 
}
const removeErrors = (input,error_span) =>
{
    error_span.textContent="";
    input.style.border = '1px solid black'; 
}

