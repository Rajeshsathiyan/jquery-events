$(document).ready(function(){
    $("div").focusin(function(){
        $(this).css("background-color","yellow")
    })
    $("div").focusout(function(){
        $(this).css("background-color","white")
    })
})