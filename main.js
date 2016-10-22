var clicked = false;
jQuery(document).ready(function()
{
    $('#button').on('click', function(d){
        if(clicked === false){
            console.log("damn");
            $('#menu').css({
                visibility: "hidden"
            });
            $('#hidden_menu').css({
                visibility: "visible"
            });
            clicked = true;
        }else{
            console.log("fuck");
            $('#menu').css({
                visibility: "visible"
            });
            $('#hidden_menu').css({
                visibility: "hidden"
            });
            clicked = false;
        }
    })

});