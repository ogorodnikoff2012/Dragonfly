if (!('lang' in localStorage)) {
    localStorage['lang'] = 'ru';
}
i18n.setLanguage(localStorage['lang']);

var maxLevel = localStorage.length == 0 ? -1 : +localStorage["maxLevel"];

function onClick(i) {
    return function () {
        localStorage["lastLevel"] = i;
        window.open("game.html", "_self");
    };
};

var tableMaker = new TableMaker(5, document.getElementById("levels"));

for (var i = 0; i < levelManager.numOfLevels; i++) {
    var button = document.createElement("button");
    /*    <button id="resumeGame" class="gameButton">
     <p class="buttonTitle i18n">Resume Game

     </p>*/
    addClass(button, "gameButton");
    if (i > maxLevel) {
        addClass(button, "disabled");
        button.setAttribute("disabled", true);
    }
    var p = document.createElement("p");
    addClass(p, "buttonTitle");
    p.innerHTML = i18n.translate("Level") + " " + (i + 1);
    button.appendChild(p);
    button.onclick = onClick(i);
    tableMaker.addButton(button);
}

//updateLevelIndicator(true);
updateMoneyIndicator(ON_LEVEL_PAGE);
