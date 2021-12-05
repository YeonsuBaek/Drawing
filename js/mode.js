$(function() {
    $(".size").hide();
    $(".mode li").hover(function() {
        $("div",this).css("color","green");
        $("ul:not(:animated)",this).slideDown();
    }, function() {
        $("div",this).css("color","black");
        $("ul",this).slideUp();
    });
    $(".size li").hover(function() {
        $("li",this).css("color","green"); //왜 갑자기 안될까...
    }, function() {
        $("li",this).css("color","black");
    });
});