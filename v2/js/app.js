var $grid = $('.grid').isotope({
	itemSelector: '.grid-item', 
	layoutMode: 'fitRows'
});

$('.filters-button-group').on('click', 'button', function(){

	var filterValue = $(this).attr('data-filter');

	$grid.isotope({ filter: filterValue });
})