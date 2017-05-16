define(["exports"], function (exports) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
				value: true
		});

		function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
				}
		}

		var _createClass = function () {
				function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
								var descriptor = props[i];
								descriptor.enumerable = descriptor.enumerable || false;
								descriptor.configurable = true;
								if ("value" in descriptor) descriptor.writable = true;
								Object.defineProperty(target, descriptor.key, descriptor);
						}
				}

				return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);
						if (staticProps) defineProperties(Constructor, staticProps);
						return Constructor;
				};
		}();

		var GithubSvc = exports.GithubSvc = function () {
				function GithubSvc() {
						_classCallCheck(this, GithubSvc);
				}

				_createClass(GithubSvc, [{
						key: "getRepos",
						value: function getRepos(org) {
								return new Promise(function (resolve, reject) {
										$.get("https://api.github.com/orgs/" + org + "/repos").then(function (result) {
												resolve(result);
										});
								});
						}
				}]);

				return GithubSvc;
		}();
});