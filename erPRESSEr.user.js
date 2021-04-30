// ==UserScript==
// @name			erPRESSEr
// @namespace		https://github.com/d3rMoB/erPRESSEr
// @description		Unlock Paywalls
// @autor			d3rMoB
// @email			der.mad.mob(at)gmail.com
// @match           https://www.ksta.de/*
// @require			https://code.jquery.com/jquery-latest.js
// @icon            https://www.google.com/s2/favicons?domain=ksta.de
// @updateURL		https://raw.githubusercontent.com/d3rMoB/erPRESSEr/master/erPRESSEr.user.js
// @version			0.0.1
// ==/UserScript==

$(document).ready(function() {
    $( '#c1-template-platzhalter' ).hide();
    const obj = JSON.parse( $( 'script[type="application/ld+json"]:contains(articleBody)' ).text() );
    $( 'div.dm_article_text p[class="selectionShareable"]' ).html( obj.articleBody );
});