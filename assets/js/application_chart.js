//First Simple Chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawLineChart);
google.charts.setOnLoadCallback(drawBarsChart);

function drawLineChart() {

	var data = new google.visualization.DataTable();

	//adding columns
	data.addColumn('date', 'Date');
	data.addColumn('number', 'Total Currency');
	data.addColumn('number', 'Total Invested');

	//adding number of rows
	data.addRows(6);

	//adding sample data
	data.setValue(0, 0, new Date('2017-11-05'));
	data.setValue(0, 1, 2045.29);
	data.setValue(0, 2, 130.50);

	data.setValue(1, 0, new Date('2017-11-06'));
	data.setValue(1, 1, 1987.29);
	data.setValue(1, 2, 188.50);

	data.setValue(2, 0, new Date('2017-11-07'));
	data.setValue(2, 1, 1867.29);
	data.setValue(2, 2, 308.50);

	data.setValue(3, 0, new Date('2017-11-08'));
	data.setValue(3, 1, 1809.29);
	data.setValue(3, 2, 366.50);

	data.setValue(4, 0, new Date('2017-11-09'));
	data.setValue(4, 1, 1559.29);
	data.setValue(4, 2, 616.50);

	data.setValue(5, 0, new Date('2017-11-10'));
	data.setValue(5, 1, 1528.79);
	data.setValue(5, 2, 647.00);


	//creating a new chart
	var line_chart = document.getElementById('line_chart');
	var chart = new google.visualization.LineChart(line_chart);

	//drawing the chart with specific title and widthxheight
	chart.draw(data, 
		{
			with: 400, 
			height: 240,
			title: 'My Investments',
			curveType: 'function'
		});

}

function drawBarsChart() {

	var data = new google.visualization.DataTable();

	//adding columns
	data.addColumn('string', 'Month');
	data.addColumn('number', 'Expenses');

	data.addRows(5);

	data.setValue(0, 0, 'January');
	data.setValue(0, 1, 14350);

	data.setValue(1, 0, 'February');
	data.setValue(1, 1, 27404);

	data.setValue(2, 0, 'March');
	data.setValue(2, 1, (27404 * 2));

	data.setValue(3, 0, 'April');
	data.setValue(3, 1, (27404 * 4));

	data.setValue(4, 0, 'May');
	data.setValue(4, 1, (27404 * 6));

	// getting the div who will receives the chart
	var bars_chart = document.getElementById('bars_chart');

	//creating the chart
	var chart = new google.visualization.ColumnChart(bars_chart);

	//chart options
	var options = {
		width: 700,
		height: 240,
		title: 'Expenses',
		vAxis: {
			title: 'Values'
		},
		hAxis: {
			title: 'Months'
		}
	};

	chart.draw(data, options);

	/*
	TODO: Implements this functionality
	//Events - Select Values from specific row
	google.visualization.events.addListener(chart, 'select', mouseEventHandler);

	function mouseEventHandler(event) {

		var selection = chart.getSelection();
		var valueSelected = chart[0].row;
		var monthSelected = data.getFormattedValue(valueSelected, 0);
		var expenseSelected = data.getFormattedValue(valueSelected, 1);

		document.getElementById('msg').innerHTML = 'Expensed in ' + monthSelected + ' Total: ' + expenseSelected + '<br>';
	}
	*/

}