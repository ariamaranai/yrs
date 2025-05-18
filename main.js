// var z = {};
{
  let has = (a, b) => {
    switch (b) {
      case "alt":
      case "altKey":
      case "androidTablet":
      case "animation":
      case "animationBegin":
      case "animationDuration":
      case "animationEasing":
      case "animationId":
      case "autoCapitalize":
      case "autoComplete":
      case "autoCorrect":
      case "color":
      case "ctrlKey":
      case "data-test":
      case "onAnimationEnd":
      case "onAnimationStart":
      case "onTouchEnd":
      case "onTouchMove":
      case "onTouchStart":
      case "radius":
      case "referer":
      case "role":
      case "shape":
      case "shiftKey":
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
}