Work backwards:

== v2+ icebox

* Deploy to VPS
* Use CloudFlare in front of Heroku or VPS or both
* Add sites (Google, OrderIt, BlogTO, etc.)

== Marketing

* Tell family & friends
* Tweet about it

== Release

* Release the Chrome extension to the store
* Make a simple icon, maybe just using an online generator
* Write a description

== Deployment and Acceptance Testing

* Test on Windows
* Test the extension against Heroku
* Deploy the API to Heroku

== Quality Assurance

* QA test: which restaurants does it miss? 
* Test the extension on Yelp
* Test the extension on Just-Eat

== Design & Polish

* Design an HTML "rating badge" fragment to inject into page
  * rating, COLOR
  * (if possible) previous ratings
  * last inspected
  * link to DineSafe report

== Chrome Extension MVP

* Make the extension modify pages
* Make the extension hit the API and get useful data
* Get selectors (addr/phone/name, insertPoint) for these sites:
  * Yelp
  * JustEat
* Read deuglified NYC extension for reference
* Create a 'hello world' Chrome extension

== Dinesafe Experimentation

* Experiment with the dinesafe-api repo
  * Determine how to get a rating by phone, address, name
  * Try to get it from the $jQuery console
* Clone the dinesafe-api repo, get it running locally

