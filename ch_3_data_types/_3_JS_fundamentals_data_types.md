Programming languages that allow such things, such as JavaScript, 
are called “dynamically typed”, meaning that there exist data types, 
but variables are not bound to any of them.

Number

<script>
let n = 123;
n = 12.345;//no error
</script>
The number type represents both integer and floating point numbers.

There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

Besides regular numbers, there are so-called “special numeric values” which also belong to this data 
type: Infinity, -Infinity and NaN.
Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

We can get it as a result of division by zero:
<script>alert( 1 / 0 ); // Infinity</script>

Or just reference it directly:
<script>alert( Infinity ); // Infinity</script>

NaN represents a computational error. It is a result of an incorrect or an 
undefined mathematical operation, for instance:
<script>alert( "not a number" / 2 ); // NaN, such division is erroneous</script>

NaN is sticky. Any further mathematical operation on NaN returns NaN:
<script>
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN
</script>

NOTE:- So, if there’s a NaN somewhere in a mathematical expression, it propagates to
the whole result (there’s only one exception to that: NaN ** 0 is 1).




QUOTES  

In JavaScript, there are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`.
Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

Backticks are “extended functionality” quotes. They allow us to embed 
variables and expressions into a string by wrapping them in ${…}, for example:

<script>
let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
</script>

The expression inside ${…} is evaluated and the result becomes a part of the string.
We can put anything in there: a variable like name or an arithmetical expression 
like 1 + 2 or something more complex.

Please note that this can only be done in backticks.
Other quotes don’t have this embedding functionality!

<script>alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)</script>


THE TYPEOF OPERATOR 

The typeof operator returns the type of the operand. 
It’s useful when we want to process values of different types differently 
or just want to do a quick check.

A call to typeof x returns a string with the type name:
<script>
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
</script>

The last three lines may need additional explanation:

1. Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers.
 Here, it serves just as an example of an object.

2. The result of typeof null is "object". That’s an officially recognized error in typeof, 
coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object.
It is a special value with a separate type of its own. The behavior of typeof is wrong here.

3. The result of typeof alert is "function", because alert is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function". That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.

The typeof(x) syntax

You may also come across another syntax: typeof(x). It’s the same as typeof x.

To put it clear: typeof is an operator, not a function. The parentheses here aren’t a part of typeof. 
It’s the kind of parentheses used for mathematical grouping.



SUMMARY

There are 8 basic data types in JavaScript.

1.Seven primitive data types:

1.number:- for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
2.bigint:- for integer numbers of arbitrary length.
3.string:- for strings. A string may have zero or more characters, there’s no separate single-character type.
4.boolean:- for true/false.
5.null:- for unknown values – a standalone type that has a single value null.
6.undefined:- for unassigned values – a standalone type that has a single value undefined.
7.symbol:- for unique identifiers.

And one non-primitive data type:
1.object:- for more complex data structures.

The typeof operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.
