//First Simple Chart
google.load('visualization', '1', {'packages':['corechart']});
google.setOnLoadCallback(drawChart);

function drawChart() {

	var data = new google.visualization.DataTable();

	//adding columns
	data.addColumn('string', 'Month');
	data.addColumn('number', 'Value Spent R$');

	//adding number of rows
	data.addRows(5);

	//adding sample data
	data.setValue(0, 0, 'January');
	data.setValue(0, 1, 2045);

	data.setValue(1, 0, 'February');
	data.setValue(1, 1, 1000);

	data.setValue(2, 0, 'March');
	data.setValue(2, 1, 1900);

	data.setValue(3, 0, 'April');
	data.setValue(3, 1, 6400);

	data.setValue(4, 0, 'May');
	data.setValue(4, 1, 3230);

	//creating a new chart
	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

	//drawing the chart with specific title and widthxheight
	chart.draw(data, 
		{
			with: 200, 
			height: 240,
			title: 'Month Expenses',
			colors: ['green'],
			curveType: 'function'
		});

}

