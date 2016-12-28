# jQuery Is Scrollable Plugin

This jQuery plugin will help you with finding HTML elements with a scrollbar.
Horizontally and vertically scrollable elements are found by actually trying to scroll them using jQuery.scrollLeft and jQuery.scrollTop methods.

Solutions using only a comparison of scrollHeight, clientHeight or scrollWidth, clientWidth attributes can be found on the internet, however they fail in many cases.

## Install
Grab [the latest release](https://github.com/foobarbaz-pl/jquery.is-scrollable/releases), unpack and copy `dist/jquey.is-scrollable.min.js` into your scripts folder.

## Usage

1. Include jQuery (>=1.2.6):
    ```html
<script src="jquery-2.2.4.min.js" type="text/javascript"></script>
    ```

2. Include plugin:
    ```html
<script src="jquey.is-scrollable.min.js" type="text/javascript"></script>
    ```

3. Call the plugin:

    ```javascript
// returns all div elements with horizontal scrollbar
$('div:horizontally-scrollable')

// returns all visible div elements with vertical scrollbar
$('div:visible:vertically-scrollable')

// returns true if element has horizontal scrollbar
$('#full-tab').isHorizontallyScrollable()
    ```

## License

[MIT License](./LICENSE.txt) © Sebastian Cichosz
