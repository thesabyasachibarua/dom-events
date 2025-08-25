console.log('script connected');
// change title name from input value--->
document.getElementById('name-update').addEventListener('click',function(){
    const formName = document.getElementById('form-name');
    console.log(formName);
    console.log('name: ', formName.value);
    // type 1: setting name
    // const givenName = document.getElementById('title-name');
    // console.log(givenName);
    // givenName.innerText = formName.value;
    
    // type 2: setting name
    const newName = formName.value;
    console.log(newName);

    const addedName = document.getElementById('title-name');
    addedName.innerText = newName;



})