-->Declaring twice triggers an error.A variable should be declared only once.
A repeated declaration of the same variable is an error:
<script>
let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared
</script>
So, we should declare a variable once and then refer to it without let.
<script>
let message = "This";
message = "That"; // No error
</script>

--> When the name contains multiple words, camelCase is commonly used. 
That is words go one after another, each word except first starting with a capital letter: myVeryLongName.

--> What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. 
--> They are regular symbols, just like letters, without any special meaning.
These names are valid:
<script>
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
alert($ + _); // 3
</script>
-->Examples of incorrect variable names:
<script>
let 1a; // cannot start with a digit
let my-name; // hyphens '-' aren't allowed in the name
</script>

-->Variables declared using const are called “constants”. They cannot be reassigned. 

An attempt to do so would cause an error:
<script>
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!
</script>