[jQuery Longty](http://ozgrozer.github.io/longty/)
==============

[![Join the chat at https://gitter.im/ozgrozer/longty](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ozgrozer/longty?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Every web designer had a problem that the overflow texts. And everyone has a solution to solve this problem. You can lower the text-size, shorten character count or the best way use overflow:hidden in css...

jQuery Longty allows to us easily display long texts without breaking the page typography.


Simple Usage
----------

```javascript
$("selector").longty();
```


Parameters
-----------
```javascript
startMode:"hover", // auto or mouse hover
speed:100, // Pixels per 1 second
waitingDelay:50, // Waiting delay per slide ( in ms )
mouseOutDelay:500, // Mouse out delay ( in ms )
slideLeftEasing:"", // Slide left easing
slideRightEasing:"", // Slide right easing
mouseOutEasing:"" // Mouse out easing
```
