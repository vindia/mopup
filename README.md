# mopup for jQuery
This plugin shows a random joke taken from the _Internet Chuck Norris Database_. Not that I like these jokes in particular, but it was the only joke REST API I could find.

## Why the name?
The name is a [portmonteau](http://en.wikipedia.org/wiki/Portmanteau "Wikipedia") from the Dutch words *mop* (meaning *joke*) and *popup* (meaning *that annoying thing your browser likes to kill*).

## Why this plugin?
I was bored and wanted to write a jQuery plugin. This was my first attempt and I used lots of boilerplate code that can be found at the [authoring a jQuery plugin page](http://docs.jquery.com/Plugins/Authoring "jQuery Documentation") in the jQuery documentation.

## Usage
Regular usage is as follows:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
    <script src="jquery.mopup.js"></script>
    <script>
        $(document).mopup();
    </script>

However, if you don't like the default look and feel, you can use some options. They are pretty self-explaining. In this example they have their default values. 

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
    <script src="jquery.mopup.js"></script>
    <script>
        $(document).mopup({
            'backgroundColor': '#333132',
            'color': '#FFF67C',
            'borderTopColor': '#282728',
            'animate': true
        });
    </script>
