$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $('#nav-home').removeClass('nav-home');
        $('#nav-home').addClass('special-color');

    } else {
        $('#nav-home').removeClass('special-color');
        $('#nav-home').addClass('nav-home');
        $('#nav-home').removeClass('shadow');

    }
});

$(document).ready(function() {

            $("#nav-icon").click(function() {
              $('#nav-home').removeClass('nav-home');
              $('#nav-home').addClass('special-color');
            });
            $("#navbarDropdownMenuLink2").click(function() {
              $('#nav-home').removeClass('nav-home');
              $('#nav-home').addClass('special-color');
            });
            $("#navbarDropdownMenuLink3").click(function() {
              $('#nav-home').removeClass('nav-home');
              $('#nav-home').addClass('special-color');
            });
            $("#navbarDropdownMenuLink4").click(function() {
              $('#nav-home').removeClass('nav-home');
              $('#nav-home').addClass('special-color');
            });
            $("#navbarDropdownMenuLink5").click(function() {
              $('#nav-home').removeClass('nav-home');
              $('#nav-home').addClass('special-color');
            });
            $("#navbarDropdownMenuLink6").click(function() {
              $('#nav-home').removeClass('nav-home');
              $('#nav-home').addClass('special-color');
            });
      

});


$('.table-remove').click(function () {
$(this).parents('tr').detach();
});
