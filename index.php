<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Hack Coffee</title>
	<link href="//cdn.jsdelivr.net/fontawesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
	<link href="https://cdn.jsdelivr.net/jquery/3.1.0/jquery.min.js" rel="stylesheet">
	<link href="css/core.css" rel="stylesheet">
	<link href="css/app.css" rel="stylesheet">
	<script>
		var currentdate = new Date();
		var time = currentdate.getHours() + ":" + (currentdate.getMinutes() < 10 ? "0" : "") + currentdate.getMinutes();
		window.blah = {}
	</script>
	<style>
	@font-face {
			font-family: 'Arcade Classic';
			src: url('fonts/arcadeclassic.eot');
			src: url('fonts/arcadeclassic.eot?#iefix') format('embedded-opentype'),
					 url('fonts/arcadeclassic.woff') format('woff'),
					 url('fonts/arcadeclassic.ttf') format('truetype'),
					 url('fonts/arcadeclassic.svg#arcadeclassic') format('svg');
			font-weight: normal;
			font-style: normal;
	}
	</style>
</head>
<body>
	<header>
	  <h1>Hack Coffee <span id="clock"><span id="currentTime">6:45</span> <span id="ampm">am</span></span></h1>
	</header>
	<main>
		<section id="home" class="active">
			<div class="card store">
				<figure>
					<img src="images/srwc.jpg">
				</figure>
				<figcaption>
					<h3>Einstein's (SRWC)</h3>
					<p>
						<strong>Projected Now:</strong> <span id="srwcCur" class="projected-people">C</span>
					</p>
					<img src="" id="srwcCurI" height="30">
				</figcaption>
			</div>
			<div class="card store">
				<figure>
					<img src="images/su.jpg">
				</figure>
				<figcaption>
					<h3>Starbucks</h3>
					<p>
						<strong>Projected Now:</strong> <span id="suCur" class="projected-people">C</span>
					</p>
					<img src="" id="suCurI" height="30">
				</figcaption>
			</div>
			<div class="card store">
				<figure>
					<img src="images/lied.jpg">
				</figure>
				<figcaption>
					<h3>Coffee Bean</h3>
					<p>
						<strong>Projected Now:</strong> <span id="llCur" class="projected-people">C</span>
					</p>
					<img src="" id="llCurI" height="30">
				</figcaption>
			</div>
			<div class="card store">
				<figure>
					<img src="images/seb.jpg">
				</figure>
				<figcaption>
					<h3>Einstein's (SEB)</h3>
					<p>
						<strong>Projected Now:</strong> <span id="sebCur" class="projected-people">C</span>
					</p>
					<img src="" id="sebCurI" height="30">
				</figcaption>
			</div>
    </section>
		<section id="historical">
			<div class="card chart">
				<div class="video-container">
					<iframe height="380" width="640" frameborder="0" src="https://oc11.oc.unlv.edu/en-US/embed?s=%2FservicesNS%2Fnobody%2Fsearch%2Fsaved%2Fsearches%2FTransactions%2520by%2520Location%252015%2520minute%2520interval%2520-%2520All%2520time&oid=_84V7BRvPWuG%5EGEWkoBZJ3pG5NZKrG%5EcUsbiL5XhoAGIVGpp70iE3P3cheGN8fxtM6eWYW2ROdFDwiavvxPrfTBWW6tPGR0rgPnLbceemK6yipFyfa9cprqgk8LRVoZ2qS5Na8vTsbHF2cVVavtdmS_f4zsStc9Mejg2PDcm9Md%5E4fIV2ELZJITaai8j7ZpU"></iframe>
				</div>
			</div>
			<div class="card chart">
				<table>
					<tr><td>Location</td><td>Average</td></tr>
				</table>
			</div>
		</section>
	</main>
	<aside id="game" class="game">
		<button class="close">Close</button>
		<section class="game-wrapper">
			<canvas id="background-canvas" class="canvas" width="960" height="1280"></canvas>
			<canvas id="canvas" class="canvas" width="960" height="1280"></canvas>
		</section>
	</aside>
	<footer id="tabs" class="clearfix">
		<nav>
			<button data-nav="home" class="active">&#xf015;</button>
			<button data-nav="historical">&#xf201;</button>
		</nav>
	</footer>
<script src="//cdn.jsdelivr.net/g/jquery@3.1.0(jquery.min.js)"></script>
<script src="js/status.js"></script>
<script src="js/scripts.js"></script>
</body>
</html>
