(function( $ ){
    var methods = {
        init: function(options) { 
            // Default settings
            var settings = {
                'backgroundColor': '#333132',
                'color': '#FFF67C',
                'borderTopColor': '#282728',
                'animate': true
            };
            // Override defaults when needed
            if (options) { 
                $.extend(settings, options);
            }
            
            $.get('http://api.icndb.com/jokes/random', function(response) {
                showJoke(response, settings);
            }, 'json');
        }
    };
            
    var showJoke = function(joke, settings) {
        $('<div />').attr('id', 'mopup').html(joke.value.joke).appendTo('body').css({
            'position': 'fixed',
            'bottom': 0,
            'right': 0,
            'background-color': settings.backgroundColor,
            'color': settings.color,
            'padding': '1em',
            'max-width': '400px',
            'border-top': '4px solid ' + settings.borderTopColor 
        });
        
        // Do a real pop-up animation unless disabled
        if(settings.animate) {
            var jokeBox = $('#mopup');
            var boxHeight = (parseInt(jokeBox.height()) + parseInt(jokeBox.css('padding-top')) + parseInt(jokeBox.css('padding-bottom'))) + 'px';
            jokeBox.css({'bottom': '-' + boxHeight});
            jokeBox.animate({'bottom': 0}, 380);
        }
    }
            
    $.fn.mopup = function(method) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.mopup' );
        }
    };
})( jQuery );