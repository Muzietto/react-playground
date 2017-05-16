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

  var UIPainter = exports.UIPainter = function () {
    function UIPainter(selector) {
      _classCallCheck(this, UIPainter);

      this.element = document.querySelector(selector);
    }

    _createClass(UIPainter, [{
      key: "drawRows",
      value: function drawRows(data) {
        var html = "";
        data.forEach(function (entry) {
          html += "<tr><td>" + entry.name + "</td><td>" + entry.full_name + "</td>\n      <td><a target=\"_blank\" href=\"" + entry.owner.html_url + "\">" + entry.owner.login + "</a></td>\n\t\t\t<td>" + entry.language + "</td><td>" + entry.forks + "/" + entry.watchers + "</td>\n\t\t\t<td>" + entry.open_issues_count + "</td>\n      <td><a target=\"_blank\" href=\"" + entry.html_url + "\">Visit</a></td></tr>";
        });

        this.element.querySelector("tbody").innerHTML = html;
      }
    }]);

    return UIPainter;
  }();
});