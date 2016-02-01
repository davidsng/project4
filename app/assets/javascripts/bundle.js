/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _TweetBox = __webpack_require__(1);

	var _TweetBox2 = _interopRequireDefault(_TweetBox);

	var _TweetsList = __webpack_require__(2);

	var _TweetsList2 = _interopRequireDefault(_TweetsList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// let mockTweets = [
	//   { id: 1, name: 'David 1', body: 'I am happy'},
	//   { id: 2, name: 'David 2', body: 'I am joyful'},
	//   { id: 3, name: 'David 3', body: 'I am at peace'}
	// ]

	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);

	  function Main(props) {
	    _classCallCheck(this, Main);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this, props));

	    _this.state = { tweetsList: [] };
	    return _this;
	  }

	  _createClass(Main, [{
	    key: 'formattedTweets',
	    value: function formattedTweets(tweetsList) {
	      var formattedList = tweetsList.map(function (tweet) {
	        tweet.formattedDate = moment(tweet.created_at).fromNow();
	        return tweet;
	      });
	      return {
	        tweetsList: formattedList
	      };
	    }
	  }, {
	    key: 'addTweet',
	    value: function addTweet(tweetToAdd) {
	      var _this2 = this;

	      $.post('/tweets', { body: tweetToAdd }).success(function (savedTweet) {
	        var newTweetsList = _this2.state.tweetsList;
	        newTweetsList.unshift(savedTweet);
	        _this2.setState(_this2.formattedTweets(newTweetsList));
	      }).error(function (error) {
	        return console.log(error);
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this3 = this;

	      // Need to use componentDidMount to trigger the live load of tweets
	      $.ajax("/tweets").success(function (data) {
	        return _this3.setState(_this3.formattedTweets(data));
	      }) // change the tweetList to the data we received from server
	      .error(function (error) {
	        return console.log(error);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'container' },
	        React.createElement(_TweetBox2.default, { sendTweet: this.addTweet.bind(this) }),
	        React.createElement(_TweetsList2.default, { tweets: this.state.tweetsList })
	      );
	    }
	  }]);

	  return Main;
	}(React.Component);

	var documentReady = function documentReady() {
	  var reactNode = document.getElementById('react');
	  if (reactNode) {
	    React.render(React.createElement(Main, null), reactNode);
	  }
	};

	$(documentReady);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TweetBox = function (_React$Component) {
	  _inherits(TweetBox, _React$Component);

	  function TweetBox() {
	    _classCallCheck(this, TweetBox);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TweetBox).apply(this, arguments));
	  }

	  _createClass(TweetBox, [{
	    key: "sendTweet",
	    value: function sendTweet() {
	      event.preventDefault();
	      this.props.sendTweet(this.refs.tweetTextArea.value);
	      this.refs.tweetTextArea.value = '';
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "form",
	          { onSubmit: this.sendTweet.bind(this) },
	          React.createElement(
	            "div",
	            { className: "input-field" },
	            React.createElement("textarea", { ref: "tweetTextArea", className: "materialize-textarea" }),
	            React.createElement(
	              "label",
	              null,
	              "Say something!"
	            ),
	            React.createElement(
	              "button",
	              { type: "submit", className: "btn right" },
	              "Post"
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return TweetBox;
	}(React.Component);

	exports.default = TweetBox;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Tweet = __webpack_require__(3);

	var _Tweet2 = _interopRequireDefault(_Tweet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TweetsList = function (_React$Component) {
	  _inherits(TweetsList, _React$Component);

	  function TweetsList() {
	    _classCallCheck(this, TweetsList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TweetsList).apply(this, arguments));
	  }

	  _createClass(TweetsList, [{
	    key: "render",
	    value: function render() {
	      var tweets = this.props.tweets.map(function (tweet) {
	        return React.createElement(_Tweet2.default, _extends({ key: tweet.id }, tweet));
	      });
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "ul",
	          { className: "collection" },
	          tweets
	        )
	      );
	    }
	  }]);

	  return TweetsList;
	}(React.Component);

	exports.default = TweetsList;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tweet = function (_React$Component) {
	  _inherits(Tweet, _React$Component);

	  function Tweet() {
	    _classCallCheck(this, Tweet);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tweet).apply(this, arguments));
	  }

	  _createClass(Tweet, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "li",
	        { className: "collection-item avatar" },
	        React.createElement("img", { className: "circle", src: this.props.gravatar }),
	        React.createElement(
	          "span",
	          { className: "title" },
	          this.props.name
	        ),
	        React.createElement(
	          "time",
	          null,
	          this.props.formattedDate
	        ),
	        React.createElement(
	          "p",
	          null,
	          this.props.body
	        ),
	        React.createElement(
	          "a",
	          { href: "#!", className: "secondary-content" },
	          React.createElement(
	            "i",
	            { className: "material-icons" },
	            "grade"
	          )
	        )
	      );
	    }
	  }]);

	  return Tweet;
	}(React.Component);

	exports.default = Tweet;

/***/ }
/******/ ]);