$(document).ready(function() {
    $('.blade').click(function() {
        if ($(this).hasClass('expanded')) return;
        $(this).removeClass('collapsed');
        toCollapse = $('.blade.expanded');
        toCollapse.find('.bladeTitle').show();
        iframeOut = toCollapse.find('iframe');
        iframeOut.hide();
        iframeOut.attr('src', '');
        toCollapse.removeClass('expanded');
        toCollapse.addClass('collapsed');   
        $(this).addClass('expanded');
        iframeIn = $(this).find('iframe');
        iframeIn.attr('src', iframeIn.attr('data-frameSrc'));
        iframeIn.show();
        $(this).find('.bladeTitle').hide();        
    });
});