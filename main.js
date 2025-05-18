// var k = {};
Object.prototype.hasOwnProperty.call = (a, b) => {
  switch (b) {
    case "animationBegin":
    case "animationDuration":
    case "animationEasing":
    case "animationId":
    case "autoCapitalize":
    case "autoComplete":
    case "autoCorrect":
    case "color":
    case "data-test":
    case "onAnimationEnd":
    case "onAnimationStart":
    case "onTouchEnd":
    case "onTouchMove":
    case "onTouchStart":
    case "referer":
    case "role":
    case "tabIndex":
    case "xmlns":
      return 0;
    default:
      return b in a;
  }
  // b && typeof b == "string" && b.length > 2 && (k[b] ??= 0, ++k[b]);
}