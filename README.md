# Menu-Slider
------

**Menu-Slider** is a responsive, off-canvas navigation menu 
that is made from CSS & jQuery.

#### Installation Procedure

-	Download _menu-slider.css_ & _menu-slider.js_. The minified version is also provided.

-	Setup your HTML page including the necessary CSS & JavaScript files. jQuery is also needed.
	A sample boilerplate is given for your convenience. Your welcome.

```html
	<!DOCTYPE html>
	<html>
	<head>
		<title>Menu-Slider Demo</title>
	    <!-- Stylesheets for  Off Canvas menu-->
		<link rel="stylesheet" href="css/normalize.css">
		<link rel="stylesheet" href="css/menu-slider.css">
	    <!-- jQuery -->
	    <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
	</head>
	<body>
	    <!-- Place content of page here  -->
	</body>
	</html>
```

-	Next add the markup for the menu button. Preferably, place this markup at the end of your page content so it wont affect your other layout.

	The two CSS classes related to this are `menu-button-pos` & `menu-button`. 

	*≡* the symbol refered by &#8801 is used as the menu button icon. Change it as per your preference

```html
	<div class="menu-button-pos"><span class="menu-button">&#8801;</span></div>
```

- Include a bit of jQuery magic.

```html
<script src="js/menu-slider.js"></script>
```

-	Now add the markup for the actual navigation menu. 

	`nav-canvas-wrap` is the CSS class needed to setup the structure of the menu. Set it up using the `<nav></nav>` tags.

	`<h2></h2>` can be used to highlight the menu header.

	Use `<ul></ul>` & `<li></li>` tags to generate the markup of the menu options.

```html
	<nav class="nav-canvas-wrap"> 
          <!-- Heading for Menu Slider -->
        <h2><span>&#8801;</span>&nbsp;Menu</h2>
          <!-- Place each menu option within a li tag -->
        <ul>
        	<li><a href="#"><h6>Option 1</h6></a></li>
            <li><a href="#"><h6>Option 2</h6></a></li>
            <li><a href="#"><h6>Option 3</h6></a></li>
		</ul>
    </nav>
```
- Voila, its done!


If you are using this in your project or if you just want to say Hello, [mail me](mailto:jothivickyram@gmail.com)
	



