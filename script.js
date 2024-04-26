// Requirements:
// 1. Create an HTML file with a form containing input fields for name, email, and a
// textarea for a message.
// 2. Create a CSS file to style the form (optional).
// 3. Use JavaScript to manipulate the DOM based on user interaction.
// Tasks:
// 1. When the form is submitted, display an alert with the values entered in the input
// fields.
// 2. Change the background color of the form when the mouse hovers over it.
// 3. Add a "Reset" button that clears the input fields and resets the form.
// Bonus:
// ● Use CSS transitions to animate the background color change of the form.
// ● Validate the email input field to ensure it contains a valid email address before
// submitting the form.

const userForm=document.querySelector( "#user" );
    const userName=document.querySelector("#name");
     const userEmail=document.querySelector("#email");
     const userMessage=document.querySelector("#comment");
const resetBtn=document.querySelector("#resetBtn");

userForm.addEventListener("submit",(e)=>{
    e.preventDefault();
   let name= userName.value;
   let email= userEmail.value;
    let msg=userMessage.value;
     alert(`Name: ${name}, Email: ${email}, Message: ${msg}`);
});

userForm.addEventListener("reset",()=>{
    let name= userName.value= "";
   let email= userEmail.value="";
    let msg=userMessage.value="";
})

userForm.addEventListener("mouseover", () => {
    userForm.style.backgroundColor = "lightblue";
})

userForm.addEventListener("mouseout", () => {
    userForm.style.transition = "background-color .5s ease";
    userForm.style.backgroundColor = "white";
})
