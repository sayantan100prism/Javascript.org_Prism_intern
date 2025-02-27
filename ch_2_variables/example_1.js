function checkVar(){
    // var is function scoped and not block scoped so it is accessible outside the block i.e for loop
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('Finally: ' + i); // This will not throw error and give Finally: 5
}
checkVar();



function checkLet(){
    // let is block scoped so it is not accessible outside the block i.e for loop
    for(let i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('Finally: ' + i); // This will throw error
}
checkLet();