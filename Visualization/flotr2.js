var wins = [
	[[0,13],[1,11],[2,15],[3,15],[4,18],[5,21],[6,28]]
];
var years = [
	[0,"2006"],[1,"2007"],[2,"2008"],[3,"2009"],[4,"2010"],[5,"2011"],[6,"2012"]
];
		
window.onload = function(){
	Flotr.draw(
		document.getElementById("chart"),
		wins,
		{
			bars: {
				show: true,
				barWidth: 0.5
			},
			yaxis: {
				min: 0,
				tickDecimals: 0
			},
			xaxis: {
				ticks: years
			}
		}
	)
};
