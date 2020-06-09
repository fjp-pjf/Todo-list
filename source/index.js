function showTodo(){
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status==200){
                var response = JSON.parse(this.responseText);
                var output = "";
            for (var i = 0; i < response.length; i++){
                let conditionString= response[i].completed===true?`<li class='disabled'>`:'<li>';
                output +=conditionString + `<input type='checkbox' class='checkbox' ${response[i].completed?'checked':''}>  ${response[i].title}  </li> <hr> `;

            }
            document.getElementById("list").innerHTML = output;
            }
        }
        xhttp.open("GET","http://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();
};
showTodo();

//checking the number of checkboxes...

let checkCount = 0;
$('#list').on('click','.checkbox',function(e){
    if($(this).prop('checked')===true){
        checkCount++;
        $(this).parent().addClass('partialDisable');
        promiseCall();
    }
    else{
        checkCount--;
        $(this).parent().removeClass('partialDisable');
    }
})

//the alert part with promise...
function promiseCall(){
    const promise = new Promise(function(resolve,reject){
        if(checkCount === 5){
            resolve("congrats. 5 Tasks have been successfully completed!");
        }
    })
    promise.then((msg)=>{
        alert(msg);
    })
}

$('.rolldown-list li').each(function () {
    var delay = ($(this).index() / 4) + 's';
    $(this).css({
      webkitAnimationDelay: delay,
      mozAnimationDelay: delay,
      animationDelay: delay
    });
  });






