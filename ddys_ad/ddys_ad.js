// ==UserScript==
// @name         ddys_ad.js
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  广告隐藏
// @author       wuuconix
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ddys.tv
// @grant        none
// @license      MIT
// ==/UserScript==

/* https://gist.github.com/karlgroves/7544592 */
function getDomPath(el, noVerify) {
    // store the original element if verify is enabled. If it isn't, then don't even bother 
    // taking up any memory for it.

    const origElem = el;

    if ( ! el ) {
        console.error('No element provided');
        return;
    }

    const stack = [];
    let levelCount = 0;
    let nearestElemWithId = null;

    let sibParent;
    let sibSiblings;

    do {
        levelCount++;

        let sibCount = 0;
        let sibIndex = 0;
        sibParent = el?.parentNode;
        sibSiblings = sibParent?.children;

        if ( sibSiblings ){
            sibSiblings = Array.from(sibSiblings).filter( sibElem => el.nodeName == sibElem.nodeName );
        }

        // Iterate over the childNodes of the elements parentNode to get the
        // index to use
        if ( sibSiblings ){
            for ( let i = 0; i < sibSiblings.length; i++ ) {
            let sib = sibSiblings[i];

            //if ( sib.nodeName != el.nodeName )  continue;
            
                sibCount++;

                if ( sib === el ) {
                // If this is the correct element, then save the sibIndex
                // and stop looping
                sibIndex = sibCount;
                break;
                }
            }
        }

        if ( el && el.hasAttribute('id') && el.id != '' ) {
        nearestElemWithId = el.id;

        // Turns out, if you have an id that starts with a numerical value, then you can't
        // use it in querySelector[All] unless you either escape it or add [id=] to it.
        if ( /^[0-9]/.test(el.id) ){
            stack.unshift(`[id="${el.id}"]`);
        }
        else {
            stack.unshift(`#${el.id}`);
        }
        } 
        else if ( sibCount > 1 ) {
        stack.unshift(el.nodeName.toLowerCase() + ':nth-of-type(' + parseInt(sibIndex) + ')');
        } 
        else {
        stack.unshift(el.nodeName.toLowerCase());
        }

        el = sibParent;
    }
    while( sibParent?.nodeType === Node.ELEMENT_NODE && nearestElemWithId === null );


    if ( stack[0] === 'html' )
        stack.shift();

    const result = stack.join(' > ');

    if ( noVerify ) return result;

    let selectionFromResult;

    try {
        selectionFromResult = document.querySelector(result);
    }
    catch(err){
        console.error(`Encountered an exception when trying to verify querySelector(${result})\n\tError:`, err);
    }

    // If there's no matches when using querySelector() with the result string, then
    // return false;
    if ( ! selectionFromResult ){
        console.error(`Failed to find any document using querySelector(${result})`);
        return false;
    }

    // If there is a result, but its not the same element, then return false;
    else if ( ! origElem.isSameNode(selectionFromResult) ){
        console.error(`Element returned from querySelector(${result}) is not the same as the element provided`);
    }

    // If we got here, then the matched element is the same element, then it's been verified.
    return result;
}

let adList = localStorage.getItem("ddys_ad")
const style = document.createElement("style")

if (adList) {
    adList = JSON.parse(adList)
    style.innerHTML = `${adList.join(",")} {
  width: 0px !important;
  height: 0px !important;
}`
    document.head.appendChild(style)
}

document.addEventListener("click", (e) => {
    if (!e.ctrlKey || !e.shiftKey) {
        return
    }

    e.preventDefault()

    const target = e.target
    target.style.width="0px"
    target.style.height="0px"

    const jsPath = getDomPath(target)
    let adList = localStorage.getItem("ddys_ad")

    if (adList) {
        adList = JSON.parse(adList)
        adList.push(jsPath)
        localStorage.setItem("ddys_ad", JSON.stringify(adList))
    } else {
        localStorage.setItem("ddys_ad", JSON.stringify([jsPath]))
    }
})