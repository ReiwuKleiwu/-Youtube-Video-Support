// ==UserScript==
// @name         DrrrKariYoutubeVideoSupport
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ニック
// @match        http://drrrkari.com/room/
// @grant        none
// ==/UserScript==

"use strict";

window.addEventListener("load", function () {

            setInterval(function () {

                let talks = document.getElementById("talks");

                for (let i = 0; i < talks.children.length; i++) {
                    if (talks.children[i].children[1] !== undefined) {
                        let msg = talks.children[i].children[1].children[0].children[1].innerHTML;

                        if(msg.includes("www.youtube.com/watch")){

                            let msgBubble = talks.children[i].children[1].children[0].children[1];

                            msgBubble.style.height = '';
                            msgBubble.style.width = '';

                            let YTURL = msgBubble.children[0].innerHTML;

                            YTURL = YTURL.replace('watch?v=', "embed/");

                            let iFrame = document.createElement("iFrame");
                            iFrame.style.width = "560px";
                            iFrame.style.height = "315px";
                            iFrame.style.border = "2px solid black";
                            iFrame.style.borderRadius ="5px";
                            iFrame.src = YTURL;

                            if(msgBubble.className !== 'body YOUTUBE'){
                                msgBubble.classList.add('YOUTUBE');
                                msgBubble.appendChild(iFrame);
                            }


                        }
                    }
                }


            }, 1000);


        }, false);
