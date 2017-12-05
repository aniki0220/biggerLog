
// ==UserScript==
// @name         Get the log in console
// @version      1.0
// @description  = =
// @author       NDM
// @include      https://online-judge.tepd.tk/Game/my-history/*

// @exclude      https://online-judge.tepd.tk/Game/my-history/


// @grant        unsafeWindow
// ==/UserScript==
 
(function() {
            console.log(document.getElementsByClassName("log-box")[0].value);
        })();
