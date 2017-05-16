define(["./githubSvc", "./uiPainter"], function (_githubSvc, _uiPainter) {
    "use strict";

    var svc = new _githubSvc.GithubSvc();
    var painter = new _uiPainter.UIPainter("#githubRepos");

    svc.getRepos("angular").then(function (result) {
        painter.drawRows(result);
    });
});