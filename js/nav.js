$(document).ready(function(){

    var startNavPos=-1;

    window.onscroll=function() {

        var bar = document.getElementById('nav');
        
        if(startNavPos < 0) {
            startNavPos=findPosY(bar);
        }

        // Stick the navigation bar to the top of the screen
        if(pageYOffset > startNavPos) {
            bar.style.position='fixed';
            bar.style.top=0;
        } else { //return it back to its original location
            bar.style.position='relative';
        }
    };

    // Determine if the obj has been scrolled by
    function findPosY(obj) {
        var curtop = 0;
        if (typeof (obj.offsetParent) != 'undefined' && obj.offsetParent) {
            while (obj.offsetParent) {
                curtop += obj.offsetTop;
                obj = obj.offsetParent;
            }
            curtop += obj.offsetTop;
        }
        else if (obj.y)
            curtop += obj.y;
        return curtop;
    }
});
