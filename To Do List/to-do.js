$(document).ready(function(){
    $("#button").click(function(){
        let toAdd = $("input[name = listItem]").val();
        $("ul").append("<li>"+toAdd+"</li>");
        //$("input").val(" ");  
    })
    $(document).on("dblclick","li",function(){
        $(this).toggleClass("strike").fadeOut("slow");
        //toggleClass is not necessary 
        //alert("im in")
    })
    //to clear input when click on it
    $("input").focus(function(){
        $(this).val(" ");
    })
    $("ul").sortable();
    
})