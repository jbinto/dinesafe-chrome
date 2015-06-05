(function() {
  
  console.log("extension running");

  // TODO: detect site name from URL
  var siteName = "yelp";

  var clean = function(selector) {
    return selector.innerText.trim().toLowerCase();
    // TODO: remove apostrophes, parens, ampersands, hashes...
  };

  var selectors = {};
  switch (siteName) {
    case "yelp":
      selectors.name = document.querySelector(".biz-page-title");

      // TODO: this selector is lifted from Chrome dev tools "Copy CSS path".
      // works for now, but might be worth making less specific for future
      selectors.address = document.querySelector('#wrap > div.biz-country-ca > div > div.top-shelf > div > div.biz-page-subheader > div.mapbox-container > div > div.mapbox-text > ul > li.address > strong > address > span:nth-child(1)');
      break;

    default:
      throw "No selectors for " + siteName;
  }

  var name = clean(selectors.name);
  var address = clean(selectors.address);

  // hooray! ES6 template literals!
  console.log(`name: ${name}; address: ${address}`);

})();
