/**
 * Load foundation
 */

$(document).foundation();

/**
 * Twitter feed options
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
 **/

var config1 = {
  "id": '463049070244667392',
  "domId": 'twitter',
  "maxTweets": 2,
  "enableLinks": false,
  "showInteraction": false,
  "showRetweet": false
};
twitterFetcher.fetch(config1);

/**
 * Profile tooltips
 **/

(function () {
var profileImg = document.getElementsByClassName('prof-img'),
    profileJs = document.getElementsByClassName('prof-js');

for (var i = 0; i < profileImg.length; i++) {

    (function (i) {
        profileImg[i].addEventListener('mouseover', function() {
            profileJs[i].className = profileJs[i].className.replace(/prof-inv/,'prof-show');
            profileJs[i].className = profileJs[i].className.replace(/no-ani/,'zoomIn');
        });

        profileImg[i].addEventListener('mouseout', function() {
            profileJs[i].className = profileJs[i].className.replace(/prof-show/,'prof-inv');
            profileJs[i].className = profileJs[i].className.replace(/zoomIn/,'no-ani');
        });
    })(i);
}
})();