(function() {
  "use strict";

  const API_URL = "http://dinesafe.dev/api/1.0/establishments.json"
  
  console.log("dinesafe-chrome extension running");

  let clean = function(selector) {
    return selector.innerText
      .trim()
      .toLowerCase();
    // TODO: remove apostrophes, parens, ampersands, hashes...
  };

  let yelp = function() {
    let name = document.querySelector(".biz-page-title");

    // TODO: this selector is lifted from Chrome dev tools "Copy CSS path".
    // works for now, but might be worth making less specific for future
    let address = document.querySelector('#wrap > div.biz-country-ca > div > div.top-shelf > div > div.biz-page-subheader > div.mapbox-container > div > div.mapbox-text > ul > li.address > strong > address > span:nth-child(1)');

    return {
      name: clean(name),
      address: clean(address)
    }
  }

  let result = yelp();
  // hooray! ES6 template literals!
  console.log(`name: ${result.name}; address: ${result.address}`);

  let url = `${API_URL}?search=${result.name}`;
  fetch(url)
  .then(function(response) {
    return response.blob();
  })
  .then(function(blob) {
    console.log(blob);
  });


})();
