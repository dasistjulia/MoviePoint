/**
 * Created by David on 31.03.2017.
 */
$(document).ready(function() {

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($(anchor.attr('href')).offset().top - 50)
        }, 500, 'linear');
        event.preventDefault();
    });



    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

     //Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });


    // Get the modal
    var modal = document.getElementById('myModal');

// Get the button that opens the modal
    var btn = document.getElementById("img1");
// Get the modal

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    };

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };




var modal1 = document.getElementById('myModal1');

// Get the button that opens the modal
var btn = document.getElementById("img2");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
};

///https://stackoverflow.com/questions/34427926/using-multiple-modal-dialogs-in-one-page

});