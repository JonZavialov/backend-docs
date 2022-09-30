function addEvents(){
    if (window.location.hash === '') selectNavLink($("#navlinks p")[0]);

    $("#navlinks p").each((_i, item) => {
        $(item).width($("body").width() * 0.18 - 50 + "px");
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

function setMobileMode() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if (vw < 870){
        changeToMobileCSS()
    }
}

function changeToMobileCSS() {
    $('aside').hide()

    $('#main').css({
        'margin-left': 0,
        'display': 'flex',
        'flex-direction': 'column'
    })

    $('nav').css({
        'padding-right': 0,
        'margin': 'auto'
    })

    $('nav a:contains("Website")').css('margin-left', 0)

    $('.docs-section').each((_i, item) => {
        $(item).css('flex-direction', 'column')
    })

    $('.docs-text-section').each((_i, item) => {
        $(item).css('width', '95%')
    })

    $('.code-area').each((_i, item) => {
        $(item).css('margin', 'auto')
    })

    $('.snippet').each((_i, item) => {
        $(item).css('margin', '15px auto')
    })

    $('.codebox').each((_i, item) => {
        $(item).css('overflow-x', 'scroll')
    })
}