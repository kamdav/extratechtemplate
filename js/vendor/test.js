/*
* ### HOW TO CREATE A VALID ID TO USE: ###
* Go to www.twitter.com and sign in as normal, go to your settings page.
* Go to "Widgets" on the left hand side.
* Create a new widget for what you need eg "user time line" or "search" etc.
* Feel free to check "exclude replies" if you don't want replies in results.
* Now go back to settings page, and then go back to widgets page, you should
* see the widget you just created. Click edit.
* Now look at the URL in your web browser, you will see a long number like this:
* 345735908357048478
* Use this as your ID below instead!
*/

/**
 * How to use TwitterFetcher's fetch function:
 * @param {Object} An object containing at minimum the following two properties:
 * id {string} The ID of the Twitter widget you wish to grab data from
 *    (see above for how to generate this number).
 * domId {string} The ID of the DOM element you want to write results to.
 *
 * You may then also specify the following (case sensitive) properties if you
 * desire:
 *
 * maxTweets {int} Optional - the maximum number of tweets you want returned.
 *     Must be a number between 1 and 20.
 * enableLinks {boolean} Optional - set true if you want urls and hash tags to
 *     be hyperlinked!
 * showUser {boolean} Optional - Set false if you don't want user photo / name
 *     for tweet to show.
 * showTime {boolean} Optional - Set false if you don't want time of tweet
 *     to show.
 * dateFunction {function/string} Optional - A function you can specify to
 *     format tweet date/time however you like. This function takes a JavaScript
 *     date as a parameter and returns a String representation of that date.
 * showRetweet {boolean} Optional - Show retweets or not. Set false to not show.
 * customCallback {function/string} Optional - A function to call when data is
 *     ready. It also passes the data to this function should you wish to
 *     manipulate it yourself before outputting. If you specify this parameter
 *     you must output data yourself!
 * showInteraction {boolean} Optional - Show links for reply, retweet,
 *     favourite. Set false to not show.
 */

// ##### Simple example 1 #####
// A simple example to get my latest tweet and write to a HTML element with
// id "tweets". Also automatically hyperlinks URLS and user mentions and
// hashtags.
var config1 = {
  "id": '463049070244667392',
  "domId": 'example1',
  "maxTweets": 1,
  "enableLinks": true
};
twitterFetcher.fetch(config1);
