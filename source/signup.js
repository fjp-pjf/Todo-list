
function validate(callback){
//username validation
$(document).ready(function(){
    if($("#inputName4").val() !== "admin"){
            $("#nameError").html("Invalid username");
            $("#nameError").css("color", "red");
            $("#inputName4").css("border", "2px solid red");
            return false;
         
    }else{
            $("#nameError").html(" Valid username");
            $("#nameError").css("color", "green");
            $("#inputName4").css("border", "2px solid green");
    }

//password validation
if($("#inputPassword4").val() !== "12345"){
    $("#pwdError").html("Invalid password");
    $("#pwdError").css("color", "red");
    $("#inputPassword4").css("border", "2px solid red");
    return false;
}
else{
    $("#pwdError").html("Valid password");
    $("#pwdError").css("color", "green");
    $("#inputPassword4").css("border", "2px solid green");
}
callback();
});
}//function validate ends...


function callback(){
    window.location = "index.html";
}