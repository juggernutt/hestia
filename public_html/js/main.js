/*
 * MATCHFIXING
 * Main javascript file.
 *
 * This file includes all general events and triggers
 * that effect the entire website.
 *
 */

/*
 * Globals
 */
var body = $('body');

$(function() {
	
	var data = {
		// A labels array that can contain any sort of values
		labels: ['18:15', '18:30', '18:45', '19:00', '19:15', '19:30'],
		// Our series array that contains series objects or in this case series data arrays
		series: [
			[70, 75, 85, 90, 75, 70, 80]
		]
	};
	
	// Create a new line chart object where as first parameter we pass in a selector
	// that is resolving to our chart container element. The Second parameter
	// is the actual data object.
	var options = {
		low: 0,
		high: 125,
		showArea: true,
		axisX: {
			showGrid: false
		}
	}
	new Chartist.Line('.ct-chart', data, options);

});

	
/*
 * Add field validation
 * @param: Jquery obj.
 */

function modifyFields(list, action) {
	var list 	= list;
	var btn 	= action;
	var action 	= btn.data('action');
	var amount 	= list.children('.form-actions:not(".ghost")').length;
	var ghost 	= list.find('.form-actions.ghost');
	var itemId = ghost.find('.form-control').attr('id');
	
	//If add button is clicked
	if (action == 'add') {	
		/*
		 * Loop all items and hide the add button and show the delete button
		 * Also update all the ID's
		*/
		$('.form-actions:not(".ghost")').each(function(i, val){
			var item = $(this);
			item.find('.add').addClass('hidden');
			item.find('.remove').removeClass('hidden');
			item.find('.form-control').attr('id', itemId+i);
		});
		
		// Clone the ghost and add it as last item with the highest ID
		var clone = list.find('.form-actions.ghost').clone();
			clone.insertAfter('.form-actions:last').removeClass('ghost hidden').find('.form-control').attr('id', itemId+(amount));
		
	  // If the remove button is pressed
	} else if (action == 'remove') {
		// Remove the selected row
		var row = btn.closest('.form-actions');
			row.remove();	
			
		// Update the ID's of all items
		$('.form-actions:not(".ghost")').each(function(i, val){
			var item = $(this);
			item.find('.form-control').attr('id', itemId+i);
		});
	}	
	
}

/*
 * Authorize field actions
 * @param: Jquery obj.
 */

function authorizeFieldActions(list) {
	var list = list;
	var amount = list.children('.form-actions:not(".ghost")').length;
	
	// If there is only one item, only show the add button
	if (amount < 2) {
		list.find('.form-actions:last .remove').addClass('hidden');
		list.find('.form-actions:last .add').removeClass('hidden');
	}
}
