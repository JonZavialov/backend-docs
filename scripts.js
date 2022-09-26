function addEvents(){
    if (window.location.hash === '') selectNavLink($("#navlinks p")[0]);

    $("#navlinks p").each((_i, item) => {
        $(item).width($("aside").width() - 50 + "px");
        $(item).on("mousedown", () => selectNavLink(item));
        $(item).on("mouseup", () => window.location.replace("/#" + $(item).attr("redirect")));
    });
}

function selectNavLink(navLink){
    navLink = $(navLink);
    navLink.addClass("selected");
    $("#navlinks p").each((_i, item) => {
        if (item === navLink[0]) return;
        $(item).removeClass("selected");
    });
}