--> An object can be created with figure brackets {…} with an optional list of properties. 
--> A property is a “key: value” pair, where key is a string (also called a “property name”)before the colon ":", and value can be anything.

--> Empty Object
<script>
    let user = new Object(); // "object constructor" syntax
    let user = {};  // "object literal" syntax
    let user ={"likes birds": true} // multiword property name must be quoted
</script>


--> Multiword Property
<script>
    let user = {};

    // set
    user["likes birds"] = true;

    // get
    alert(user["likes birds"]); // true

   // delete
    delete user["likes birds"];
    
    //ALSO the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property.
    let user = {
    name: "John",
    age: 30
    };

    let key = prompt("What do you want to know about the user?", "name");

    // access by variable
    alert( user[key] ); // John (if enter "name")
</script>


-> Computed Properties
We can use square brackets in an object literal, when creating an object. That’s called computed properties.

<script>
    let fruit = prompt("Which fruit to buy?", "apple");
    let bag = {};

     // take property name from the fruit variable
    bag[fruit] = 5;   
</script>

Also
<script>
    let fruit = 'apple';
    let bag = {
        [fruit + 'Computers']: 5 // bag.appleComputers = 5 //Same if written in Dot notation
    };
</script>

--> Property name Limitations
As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

But for an object property, there’s no such restriction:

<script>
    // these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6
</script>

-> Other types are automatically converted to strings.

For instance, a number 0 becomes a string "0" when used as a property key:

<script>

let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)

</script>


--> Property existence test, “in” operator

In JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist, it will only return "undefined"
<script>
    let user = {};
    alert( user.noSuchProperty === undefined ); // true means "no such property"
</script>

-> left side of "in" there must be a property name. That’s usually a quoted string.
<script>
    let user = { name: "John", age: 30 };
    alert( "age" in user ); // true, user.age exists
    alert( "blabla" in user ); // false, user.blabla doesn't exist
</script>



