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

#### scrollTopClass:
*String*: Class added to the element when scroll reaches top

*Default*: `is-top`

#### scrollBottomClass:
*String*: Class added to the element when scroll reaches bottom

*Default*: `is-bottom`

#### scrollOffsetInClass:
*String*: Class added to the element when is in the offset

*Default*: `is-offset-in`

#### scrollOffsetOutClass:
*String*: Class added to the element when is out of the offset

*Default*: `is-offset-out`

#### timeOut:
*Integer*: Delay scroll time out

*Default*: `1000/60`

#### tolleranceUp:
*Integer*: Scroll up delta

*Default*: `0`

#### tolleranceDown:
*Integer*: Scroll down delta

*Default*: `0`

#### scrollOffset:
*Integer*: Scroll offset

*Default*: `$(this).outerHeight()`

#### onScrollMenuUp:
*Function*: Callback that fires on scroll up

*Default*: `function() {}`

#### onScrollMenuDown:
*Function*: Callback that fires on scroll down

*Default*: `function() {}`

#### onScrollMenuTop:
*Function*: Callback that fires when scroll reaches top

*Default*: `function() {}`

#### onScrollMenuBottom:
*Function*: Callback that fires when scroll reaches bottom

*Default*: `function() {}`

#### onScrollMenuOffsetIn:
*Function*: Callback that fires when scroll is in offset

*Default*: `function() {}`

#### onScrollMenuOffsetOut:
*Function*: Callback that fires when scroll is out of offset

*Default*: `function() {}`

## Event Hooks
These event hooks fire at the same time as their corresponding callbacks (ie. onScrollMenuUp & onScrollMenuDown)

`onScrollMenuUp` : This event is triggered on scroll down

`onScrollMenuDown` : This event is triggered on scroll up

`onScrollMenuTop` : This event is triggered when scroll reaches top

`onScrollMenuBottom` : This event is triggered when scroll reaches bottom

`onScrollMenuOffsetIn` : This event is triggered when scroll is in offset

`onScrollMenuOffsetOut` : This event is triggered when scroll is out of offset

##### Example:
```javascript
$( document ).on( 'onScrollMenuDown', function() {
	// Your code here
});
```

## Credits

Copyright (c) 2017 [Fabio Quarantini](http://www.fabioquarantini.com)

## License

[MIT License](http://opensource.org/licenses/MIT)