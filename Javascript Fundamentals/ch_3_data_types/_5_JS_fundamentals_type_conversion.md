--> String Conversion
<script>

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

</script>

--> Numeric Conversion

Numeric conversion in mathematical functions and expressions happens automatically.
For example, when division / is applied to non-numbers:
<script>
    alert( "6" / "2" ); // 3, strings are converted to numbers
</script>

--> We can use the Number(value) function to explicitly convert a value to a number:
<script>
    let str = "123";
    alert(typeof str); // string
    let num = Number(str); // becomes a number 123
    alert(typeof num); // number
</script>

--> If the string is not a valid number, the result of such a conversion is NaN. For instance:
<script>
    let age = Number("an arbitrary string instead of a number");
    alert(age); // NaN, conversion failed
</script>

--> Numeric Conversion Rules
<script>
    alert( Number("   123   ") ); // 123 //Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed.
    alert( Number("123z") );      // NaN (error reading a number at "z")
    alert( Number(true) );        // 1
    alert( Number(false) );       // 0
</script>

--> Boolean Conversion

-> Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
<script>
    alert( Boolean(0) ); // false
    alert( Boolean("") ); // false
</script>

-> Other values become true.
<script>
    alert( Boolean(1) ); // true
    alert( Boolean("hello") ); // true
</script>

-> In JavaScript, a non-empty string is always true.
<script>
    alert( Boolean("0") ); // true
    alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)
</script>