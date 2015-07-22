
toggle_nav = function(nav_id) {
    if (nav_id == "desktop_art_sub_nav") {
        $('#desktop_art_sub_nav').slideToggle("fast", 
             function() {});
        // nav = document.getElementById(nav_id);
        // if (nav.className == "second-level hide") {
        //     nav.className = "second-level";
        // } else {
        //     nav.className = "second-level hide";
        // }
        return false;
    } else {
        return true;
    }
};
