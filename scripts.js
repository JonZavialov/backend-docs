function addEvents(){
    if (window.location.hash === '') selectNavLink($("#navlinks p")[0]);

    $("#navlinks p").each((_i, item) => {
        $(item).width($("body").width() * 0.18 - 50 + "px");
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

function setScrollers(){
    $(document).scroll(async () => {
        let min = 10000
        let currentItem, previous
        $('.docs-section').each((_i, item) => {
            let yVal = item.getBoundingClientRect().y
            if (yVal > 0 && yVal < min) {
                min = yVal
                currentItem = previous
            }
            previous = item
        })

        let navLink = await getNavLinkFromSection(currentItem)
        if(navLink && !$(navLink).hasClass('selected')) {
            selectNavLink(navLink)
        }
    })
}

function getNavLinkFromSection(header){
    return new Promise((resolve) => {
        $("#navlinks p").each((_i, item) => {
            if ($(item).attr("redirect") == $(header).attr('id')) resolve(item)
        })
    })
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