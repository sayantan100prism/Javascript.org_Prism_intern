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

--> Why does the in operator exist? Isn’t it enough to compare against undefined?

-> There’s a special case when it fails, but "in" works correctly.
It’s when an object property exists, but stores undefined:
<script>
    let obj = {
    test: undefined
    };

    alert( obj.test ); // it's undefined, But the property obj.test technically exists. So the in operator works right.
    alert( "test" in obj ); // true, the property does exist!
</script>


--> The "for..in" loop
-> To walk over all keys of an object,"for..in" loop is used
-> The syntax:
<script>
    for (key in object) {
    // executes the body for each key among object properties
    }
</script>

--> For instance, let’s output all properties of user:
<script>
    let user = {
        name: "John",
        age: 30,
        isAdmin: true
    };

    for (let key in user) {
        // keys
        alert( key );  // name, age, isAdmin
        // values for the keys
        alert( user[key] ); // John, 30, true
    }
</script>


--> Ordered like an object
->  if we loop over an object, do we get all properties in the same order they were added?
<script>
    let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
  };

  for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
</script>

--> The object may be used to suggest a list of options to the user. If we’re making a site mainly for a German audience then we probably want 49 to be the first.

But if we run the code, we see a totally different picture:

USA (1) goes first
then Switzerland (41) and so on.
The phone codes go in the ascending sorted order, because they are integers. So we see 1, 41, 44, 49.


---> Integer Property
-> The “integer property” term here means a string that can be converted to-and-from an integer without a change.

So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not:

<script>
    // Number(...) explicitly converts to a number
    // Math.trunc is a built-in function that removes the decimal part
    alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
    alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
    alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property
</script>


--> …On the other hand, if the keys are non-integer, then they are listed in the creation order, for instance:
<script>
    let user = {
        name: "John",
        surname: "Smith"
    };
    user.age = 25; // add one more

    // non-integer properties are listed in the creation order
    for (let prop in user) {
        alert( prop ); // name, surname, age
    }
</script>


---> NOTE:*** So, to fix the issue with the phone codes,Adding a plus "+" sign before each code is enough.

<script>
    let codes = {
        "+49": "Germany",
        "+41": "Switzerland",
        "+44": "Great Britain",
        // ..,
       "+1": "USA"
    };

    for (let code in codes) {
       alert( +code ); // 49, 41, 44, 1
    }
</script>