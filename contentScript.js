(function() {
  
  console.log("extension running");

  // TODO: detect site name from URL
  var siteName = "yelp";

  var cleanName = function(dom) {
    return dom.innerText.trim().toLowerCase();
    // TODO: remove apostrophes, parens, ampersands, hashes...
  };

  var selectors = {};
  switch (siteName) {
    case "yelp":
      selectors.nameSelector = document.querySelector(".biz-page-title");
      break;

    default:
      throw "No selectors for " + siteName;
  }

  var restaurantName = cleanName(selectors.nameSelector);

  console.log("Restaurant name is: " + restaurantName);

})();
