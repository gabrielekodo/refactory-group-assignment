const formFocus = () =>{
    let vendorFocus = document.regForm.firstname.focus();
    return true;
}

const val_fName = ()=>{
    let fName = document.regForm.firstname;
    let fNameLen = fName.value.length
    let thisForm = document.getElementById('firstname');
    let par = document.getElementById('para1');
    const letters = /^[A-Za-z\s]+$/;

    if ( fNameLen == 0 || fNameLen < 5 || fNameLen >= 15 )
    {
        thisForm.style.backgroundColor = '#FEEAE8';
        par.textContent = "Name must have 5-12 characters!"
        par.style.color = 'red';
        fName.focus();
        // alert("Enter valid name!");
        

    }
    else if (!fName.value.match(letters)){
        fName.style.border = '3px solid red'
        thisForm.style.backgroundColor = '#FEEAE8';
        par.textContent = "Name must only contatin words!"
        par.style.color = 'red';
        fName.focus();
    
    }
    else{
        par.textContent = "✔️"
        par.style.color = 'green';
    }
}

const val_Lname = () =>{
    let lName = document.regForm.lastname;
    let lNameLen = lName.value.length
    // let thisForm = document.getElementById('firstname');
    let par2 = document.getElementById('para2');
    const letters = /^[A-Za-z\s]+$/;

    if ( lNameLen == 0 || lNameLen < 5 || lNameLen >= 15 )
    {
        // thisForm.style.backgroundColor = '#FEEAE8';
        par2.textContent = "Name must have 5-12 characters!"
        par2.style.color = 'red';
        lName.focus();
        // alert("Enter valid name!");
        

    }
    else if (!lName.value.match(letters)){
        lName.style.border = '3px solid red'
        // thisForm.style.backgroundColor = '#FEEAE8';
        par2.textContent = "Name must only contatin words!"
        par2.style.color = 'red';
        lName.focus();
    
    }
    else{
        par2.textContent = "✔️"
        par2.style.color = 'green';
    }
}
