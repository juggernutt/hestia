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
	    labels: ["January", "February", "March", "April", "May", "June", "July"],
	    datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: [65, 59, 80, 81, 56, 55, 40]
	        },
	        {
	            label: "My Second dataset",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [28, 48, 40, 19, 86, 27, 90]
	        }
	    ]
	};
	
	var options = {	
	    ///Boolean - Whether grid lines are shown across the chart
	    scaleShowGridLines : true,
	
	    //String - Colour of the grid lines
	    scaleGridLineColor : "rgba(0,0,0,.05)",
	
	    //Number - Width of the grid lines
	    scaleGridLineWidth : 1,
	
	    //Boolean - Whether to show horizontal lines (except X axis)
	    scaleShowHorizontalLines: true,
	
	    //Boolean - Whether to show vertical lines (except Y axis)
	    scaleShowVerticalLines: true,
	
	    //Boolean - Whether the line is curved between points
	    bezierCurve : true,
	
	    //Number - Tension of the bezier curve between points
	    bezierCurveTension : 0.4,
	
	    //Boolean - Whether to show a dot for each point
	    pointDot : true,
	
	    //Number - Radius of each point dot in pixels
	    pointDotRadius : 4,
	
	    //Number - Pixel width of point dot stroke
	    pointDotStrokeWidth : 1,
	
	    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
	    pointHitDetectionRadius : 20,
	
	    //Boolean - Whether to show a stroke for datasets
	    datasetStroke : true,
	
	    //Number - Pixel width of dataset stroke
	    datasetStrokeWidth : 2,
	
	    //Boolean - Whether to fill the dataset with a colour
	    datasetFill : true,
	
	    //String - A legend template
	    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
	
	};
	
	// Get context with jQuery - using jQuery's .get() method.
	var ctx = $("#heartRateChart").get(0).getContext("2d");
	// This will get the first returned node in the jQuery collection.
	var heartRateChart = new Chart(ctx).Line(data, options);
	Chart.defaults.global.responsive = true;
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
