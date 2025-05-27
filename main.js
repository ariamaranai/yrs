MediaSource.isTypeSupported = () => 1;
navigator.sendBeacon = () => 0;
{
  Element.prototype.addEventListener = function (a, b, c) {
    switch (a) {
      case "animationend":
      case "animationiteration":
      case "animationstart":
      case "auxclick":
      case "contextmenu":
      case "copy":
      case "cut":
      case "dblclick":
      case "drag":
      case "dragend":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "drop":
      case "encrypted":
      case "error":
      case "gotpointercapture":
      case "invalid":
      case "lostpointercapture":
      case "mousedown":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "mouseup":
      case "paste":
      case "pointercancel":
      case "pointerdown":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerup":
      case "test":
      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
      case "volumechange":
      case "webkitAnimationEnd":
      case "webkitAnimationIteration":
      case "webkitAnimationStart":
      case "webkitpresentationmodechanged":
        return 0;
      default:
        return EventTarget.prototype.addEventListener.call(this, a, b, c);
    }
  }
  // var z = {};
  let has = (a, b) => {
    switch (b) {
      case "MozAnimation":
      case "MozTransform":
      case "WebkitAnimation":
      case "WebkitTransform":
      case "alt":
      case "altKey":
      case "aria-hidden":
      case "aria-label":
      case "aria-live":
      case "androidTablet":
      case "animation":
      case "animationBegin":
      case "animationDuration":
      case "animationEasing":
      case "animationId":
      case "autoCapitalize":
      case "autoComplete":
      case "autoCorrect":
      case "endAngle":
      case "color":
      case "ctrlKey":
      case "data-test":
      case "focusable":
      case "loop":
      case "maxRadius":
      case "metaKey":
      case "middleRadius":
      case "minAngle":
      case "msTransform":
      case "mtestid":
      // case "offset":
      case "onAnimationEnd":
      case "onAnimationStart":
      case "onError":
      case "onMouseDown":
      case "onMouseEnter":
      case "onMouseLeave":
      case "onMouseMove":
      case "onMouseUp":
      case "onPlaybackRateChange":
      case "onTouchEnd":
      case "onTouchMove":
      case "onTouchStart":
      case "orientation":
      case "outerRadius":
      case "photoMode":
      case "playbackRate":
      case "radius":
      case "referer":
      case "rel":
      case "renderSensitiveMask":
      case "renderViolationReport":
      case "role":
      case "shape":
      case "shiftKey":
      case "showSensitiveMask":
      case "showViolationReport":
      case "startAngle":
      case "stopColor":
      case "tabIndex":
      // case "xAxis":
      // case "xAxisId":
      case "xmlns":
      // case "yAxis":
      // case "yAxisId":
      case "yads":
      case "yadsItem":
        return 0;
      default:
        // b && typeof b == "string" && b.length > 2 && (z[b] ??= 0, ++z[b]);
        return b in a;
    }
  }
  Object.prototype.hasOwnProperty = function (a) { return has(this, a) }
  Object.prototype.hasOwnProperty.call = has;

  HTMLBodyElement.prototype.appendChild = a =>
    a.tagName != "SCRIPT" && //a.src.includes("highlight")) ||
    document.body.insertBefore(a, null);
}