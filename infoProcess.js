function infoProcess()
{
    var infoFormObj = document.getElementById("infoForm");
    if (infoFormValidate(infoFormObj))
    {
        alert("Your information have been submitted, we appreciate your time!");
    }
    else{
        alert("wrong info,please type again!");
    }   
}
