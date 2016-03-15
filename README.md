# ScrollMenu

A jQuery plugin for hide header on scroll down and show on scroll up.

## Including files


```html

<!-- jQuery -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<!-- ScrollMenu core JS file -->
<script src="jquery.scrollmenu.min.js"></script>

```

## Initializing

```javascript

$(document).ready( function() {
	$('.selector').scrollMenu();
});

```

## Styles
ScrollMenu works adding and removing a class on scroll event. You need to customize your styles. (See the CSS demo file).

## Settings
ScrollMenu accepts settings from an object of key/value pairs.

##### Example:
```javascript
$('.selector').scrollMenu({
	key: value,
	key: value
});
```

## List of settings

#### addClassTo:
*Selector*: Element to add the scroll class

*Default*: `$(this)`

#### scrollUpClass:
*String*: Class added to the element when scroll up

*Default*: `is-visible`

#### scrollDownClass:
*String*: Class added to the element when scroll down

*Default*: `is-hidden`

#### timeOut:
*Integer*: Delay scroll time out

*Default*: `1000/60`

#### delta:
*Integer*: Scroll delta

*Default*: `5`

#### scrollOffset:
*Integer*: Scroll offset

*Default*: `$(this).outerHeight()`

#### onScrollMenuDown:
*Function*: Callback that fires on scroll down.

*Default*: `function() {}`

#### onScrollMenuUp:
*Function*: Callback that fires on scroll up.

*Default*: `function() {}`


## Event Hooks
These event hooks fire at the same time as their corresponding callbacks (ie. onScrollMenuUp & onScrollMenuDown)

`onScrollMenuUp` : This event is triggered on scroll down

`onScrollMenuDown` : This event is triggered on scroll up

##### Example:
```javascript
$( document ).on( 'onScrollMenuDown', function() {
	// Your code here
});
```

## Credits

Copyright (c) 2016 [Fabio Quarantini](http://www.fabioquarantini.com)

## License

[MIT License](http://opensource.org/licenses/MIT)