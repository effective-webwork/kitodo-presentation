$( document ).ready(function() {
    var options = { // put in gridstack options here
        disableOneColumnMode: true, // for jfiddle small window size
        float: false,
        handle: '.drag'
    };
    var grid = GridStack.init(options);

    if (Cookies.get('gsLayout')) {
        grid.load(JSON.parse(Cookies.get('gsLayout')));
    }

    if (grid) {
        // resize each map
        grid.on('change', function(evt, items) {
            $('.tx-dlf-map').each(function (index) {
                tx_dlf_viewer[index].map.updateSize()
            });
            Cookies.set('gsLayout', JSON.stringify(grid.save(false)));
        });
    }
});
