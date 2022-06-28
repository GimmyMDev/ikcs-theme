jQuery(document).ready(function ($) {
    /*$(".to-top").click(function() {
      $("body,html").animate({scrollTop:0},800);
    });*/
    $('.call--to-action-a').on('click', function (e) {
        setTimeout(function (e) {
            $('.ui-widget-overlay').on('click', function (e) {
                Drupal.dialog(jQuery('#drupal-modal')).close();
            });
        }, 1000);
    });
    $('.carousel[data-type="multi"] .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        for (var i = 0; i < 4; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });
});
