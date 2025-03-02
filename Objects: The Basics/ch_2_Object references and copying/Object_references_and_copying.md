--> PRIMITIVES VS OBJECTS


--> One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

-> Let’s start with a primitive, such as a string.
<script>
    let message = "Hello!";
    let phrase = message;
</script>

->Objects are not like that.

A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
<script>
    let user = {
        name: "John"
    };
</script>

--> Note:- When an object variable is copied, the reference is copied, but the object itself is not duplicated.
<script>
let user = { name: 'John' };

let admin = user; // copy the reference

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference
</script>


-->Comparison by reference

Two objects are equal only if they are the same object.
<script>
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true
</script>
For instance, here a and b reference the same object, thus they are equal: output is true

<script>
let a = {};
let b = {}; // two independent objects

alert( a == b ); // false
</script>
And here two independent objects are not equal, even though they look alike (both are empty): output is false


-->Const objects can be modified
An important side effect of storing objects as references is that an object declared as const can be modified.
For instance:
<script>
const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete
</script>
It might seem that the line (*) would cause an error, but it does not. The value of user is constant, it must always reference the same object, but properties of that object are free to change.

In other words, the const user gives an error only if we try to set user=... as a whole.