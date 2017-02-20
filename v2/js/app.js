var $container = $(".grid");

var $grid = $('.grid').isotope({
	itemSelector: '.grid-item', 
	layoutMode: 'masonryHorizontal', 
	resizable: false, 
	masonry: { columnWidth: $container.width() / 5 }
});

$('.filters-button-group').on('click', 'button', function(){

	var filterValue = $(this).attr('data-filter');

	$grid.isotope({ filter: filterValue });
})


/*
	Responsiveness, see: http://isotope.metafizzy.co/v1/demos/fluid-responsive.html
*/