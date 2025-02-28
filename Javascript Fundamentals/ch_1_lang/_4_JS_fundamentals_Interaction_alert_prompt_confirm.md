--> Alert

<script>alert("Hello");</script>

->The mini-window with the message is called a modal window. 
The word “modal” means that the visitor can’t interact with the rest of the page, 
press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.


--> Prompt

<script> result = prompt(title, [default]);</script>

->It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

->title
The text to show the visitor.

->default
An optional second parameter, the initial value for the input field.[...] specifies the parameter  is optional

<script > 
let age = prompt('How old are you?', 100); //give a prompt asking 'How old are you?' and a recommended value 100

alert(`You are ${age} years old!`); // You are 100 years old!
</script>


-->Confirm

<script>
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed and false if cancel is pressed
</script>