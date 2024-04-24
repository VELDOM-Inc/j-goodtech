var ctx = document.getElementById('login_chart');

var data = {
		labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
		datasets: [{
			label: '2023年',
			data: [0, 0, 12, 24],
			borderColor: 'rgba(178, 34, 34, 1)',
			backgroundColor: 'rgba(178, 34, 34, 1)',
			lineTension: 0,
			fill: false,
			pointRadius: 5,
			borderWidth: 3
		},
		{
				label: '2022年',
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				borderColor: 'rgba(65, 105, 225, 1)',
				backgroundColor: 'rgba(65, 105, 225, 1)',
				lineTension: 0,
				fill: false,
				pointRadius: 5,
				borderWidth: 3
		},
		{
				label: '2021年',
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				borderColor: 'rgba(0, 139, 139, 1)',
				backgroundColor: 'rgba(0, 139, 139, 1)',
				lineTension: 0,
				fill: false,
				pointRadius: 5,	
				borderWidth: 3
		}]
};

var options = {
scales: {
		yAxes: [{
				ticks: {
						min: 0,
						max: 25,
						userCallback: function(tick) {
								return tick.toString() + '回';
						}
				},
				scaleLabel: {
						display: false
				}
		}]
},
title: {
		display: false
},
legend: {
		position: 'bottom',
		labels: {

		}
	}
};

var login_chart = new Chart(ctx, {
		type: 'line',
		data: data,
		options: options
});