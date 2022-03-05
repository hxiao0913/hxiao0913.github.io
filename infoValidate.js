function infoFormValidate(infoFormObj)
{
    var lname = infoFormObj.lastName.value;
    var fname = infoFormObj.firstName.value;
    var tel = infoFormObj.telephone.value;
    var email = infoFormObj.email.value;
    var fnameOk=false;
    var lnameOk=false;
    var telOk=false;
    var emailOK=false;
    
    fnameOk = nameValid(fname);  

    lnameOk = nameValid(lname);

    telOk = telValid(tel);

    emailOK = emailValid(email);


    return fnameOk && lnameOk && telOk && emailOK;   
}

function nameValid(name)
{

    var n = name.search(/[0-9]/);
    if(n == 0)
    // if(name.match(/\D/))
    {
        alert("Error: Invalid name, cannot have numbers");
        return false;
    }
    else
    {
        return true;
    }

}

function telValid(tel)
{
    var t = tel.search(/[a-z]/);
    var len = tel.length;
    if(t !== 0 && len == 10)
    {
        return true;
    }
    else
    {
        alert("Error: Invalid phone number, must be 9 digit");
        return false;
    }

}

function emailValid(address)
{
    var p = address.search(/.+@.+/);
    if (p == 0)
        return true;
    else
    {
        alert("Error: Invalid e-mail address.");
        return false;
    }
}

