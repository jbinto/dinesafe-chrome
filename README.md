**THIS IS A WORK IN PROGRESS.** *Contact hello@jessebuchanan.ca for more info.*

# DineSafe Toronto Chrome extension

This is a Chrome extension which adds Toronto restaurant inspection ("DineSafe") results to popular websites, including Yelp.

Inspired by [a similar extension for NYC restaurants](https://chrome.google.com/webstore/detail/nyc-restaurant-health-ins/bacfbpocnejcaffinbjkikinkmhkdlid?hl=en) by Carlos Cuevas.

## How it works

The City of Toronto releases DineSafe inspection results through their Open Data portal.

Unlike NYC, Toronto offers no real time API for restaurant inspections, just an XML dump.

A hosted Ruby on Rails application, [jbinto/dinesafe-chrome-backend](https://github.com/jbinto/dinesafe-chrome-backend), retrieves this information from the City and presents it via a searchable API. This extension relies on that API.

When installed, the extension will scan popular restaurant-related websites, such as Yelp, for the names and addresses of Toronto restaurants. If a Toronto address is detected, it will attempt a search for that restaurant, and if a result is found, it will display the result of the most recent health inspection.

## Caveats/pitfalls

* The NYC API uses phone number for a fairly accurate exact match, but Toronto inspection data does not include phone number
* Exact address matches are insufficient, as multiple restaurants can share the same address, e.g: food courts
* Exact name matches are also insufficient, e.g: chain restaurants
* This means the backend will have to perform some sort of fuzzy-matching heuristic based on both name and address

