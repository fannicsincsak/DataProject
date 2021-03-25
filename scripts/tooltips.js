jQuery(function () {
    new jBox('Tooltip', {
        attach: '#Tooltip-1',
        target: '#Tooltip-1',
        theme: 'TooltipBorder',
        trigger: 'click',
        adjustTracker: true,
        closeOnClick: 'body',
        closeButton: 'box',
        animation: 'move',
        position: {
            x: 'left',
            y: 'top'
        },
        outside: 'y',
        pointer: 'left:20',
        offset: {
            x: 25
        },
        content:
            '<div class="tt-title">Input Label #1</div>' +
            '<hr class="tt-line">' +
            '<div class="tt-text">Lorem ipsum dolor sit amet, consectetur adipiscing <span class="tt-highlight">elit</span>. Proin ut diam molestie <span class="tt-highlight">lorem varius</span> iaculis. Vivamus nunc elit, <span class="tt-highlight">convallis</span> vitae facilisis in, elementum bibendum lectus.</div>',
        onOpen: function () {
            this.source.addClass('active');
        },
        onClose: function () {
            this.source.removeClass('active');
        }
    });
});

jQuery(function () {
    new jBox('Tooltip', {
        attach: '#Tooltip-2',
        target: '#Tooltip-2',
        theme: 'TooltipBorder',
        trigger: 'click',
        adjustTracker: true,
        closeOnClick: 'body',
        closeButton: 'box',
        animation: 'move',
        position: {
            x: 'left',
            y: 'top'
        },
        outside: 'y',
        pointer: 'left:20',
        offset: {
            x: 25
        },
        content:
            '<div class="tt-title">Input Label on the Left</div>' +
            '<hr class="tt-line">' +
            '<div class="tt-text">Lorem <span class="tt-highlight">ipsum dolor sit</span> amet, consectetur adipiscing elit. Proin ut diam molestie <span class="tt-highlight">lorem varius</span> iaculis. Vivamus nunc elit, <span class="tt-highlight">convallis</span> vitae facilisis in, elementum bibendum lectus.</div>',
        onOpen: function () {
            this.source.addClass('active');
        },
        onClose: function () {
            this.source.removeClass('active');
        }
    });
});
