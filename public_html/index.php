<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>HESTIA</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

		<link href="/css/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
		<link href="/css/print.css" media="print" rel="stylesheet" type="text/css" />
		<!--[if IE]>
			<link href="/css/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />

			@Todo: 
			- Insert modernizr / respond.js for IE.
		<![endif]-->

    </head>
    <body>
		<nav class="header navbar navbar-static">
			<div class="logo-container">
				<a class="logo" href="/">
					<span class="brand-name">
						HESTIA						
					</span>
				</a>
			</div>
			<div class="account-actions">
				 <button type="button" class="navbar-toggle collapsed menu-trigger" data-toggle="collapse">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			      </button>
			</div>
		</nav>		
		
		<?php include_once('templates/home.tpl.php'); ?>
		
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.0.min.js"><\/script>')</script>

        <script src="/js/plugins.js"></script>
        <script src="/js/vendor/chartist.js"></script>
        <script src="/js/main.js"></script>

		<!-- GOOGLE ANALYTICS -->
		
		<!-- END GOOGLE ANALYTICS -->
    </body>
</html>
