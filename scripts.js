function addEvents(){
    $("#navlinks p").each((_i, item) => {
        $(item).on("mousedown", () => {
           selectNavLink($(item));
        });

        //set selected element width and redirect on mouseup
    });
}

function selectNavLink(navLink){
    navLink.addClass("selected");
    $("#navlinks p").each((_i, item) => {
        if (item === navLink[0]) return;
        $(item).removeClass("selected");
    });
}