
angular.module("designsite",["duScroll","slick","ngAria"]),$(function(){Foundation.global.namespace="";var n=25,a=function(){n-=1,"false"===$("meta.foundation-data-attribute-namespace").css("font-family")||0>=n?($(document).foundation(),$(function(){window.pageInitialisationDone=!0})):setTimeout(a,20)};a()});
$(function(){var e=function(){var e,o="rgb(31,41,59)",t=document.createElement("div");return t.style.color=o,document.body.appendChild(t),e=document.defaultView?document.defaultView.getComputedStyle(t,null).color:t.currentStyle.color,document.body.removeChild(t),e.replace(/ /g,"")===o};document.documentElement.className+=e()?" no-user-customized-colors":" user-customized-colors"});
angular.module("designsite").directive("colorWheel",["$http","$window",function(e,o){return{restrict:"E",scope:{},link:function(e){function r(e){return"primary"===$(e.target).parent().attr("id")}function n(e){return"secondary"===$(e.target).parent().attr("id")}function t(o){return r(o)&&1===e.level?!1:n(o)&&0===e.level?!1:!0}function a(){var o=0===e.level?"#primary":"#secondary",r=0!==e.level?"#primary":"#secondary",n=0!==e.level?".wheel8.mask":".wheel10.mask",t=0===e.level?".wheel8.mask":".wheel10.mask";$(t).insertAfter(r),$(n).insertBefore(r),$(o).insertAfter(r),0!==e.level&&$(".inner-text").insertAfter(o),k()}function l(o,r){var n=0===e.level?"#primary":"#secondary",t=0!==e.level?"#primary":"#secondary",l=0!==e.level?".wheel8.mask":".wheel10.mask",c=0===e.level?".wheel8.mask":".wheel10.mask";v=!0;var i=p.range(r,0===e.level?10:8);e.current_color_piece>6&&0===e.level&&(e.current_color_piece=6);var s=p.range(e.current_color_piece+1,0===e.level?8:10);0===e.level&&(i.reverse(),s.reverse());var u=1;o&&(s.reverse(),s.unshift(s.pop()),u=5,v=!1),$(c).attr("apply","");var m=0,d=function(){m+=1,m===s.length-1&&(v=!1,o||(a(),setTimeout(function(){v=!1},3e3))),k()};$.each(s,function(o,r){var t=0===e.level?h[r].color:h[b].children[r].color,a=$(n+" .shape"+r);a.attr({fill:t,stroke:t,opacity:0}),a.finish().delay(400+40*o).animate({opacity:"1"},{duration:500+10*o,easing:"easeInOutQuad",complete:function(){d(r)}})});var f=0,g=function(e){f+=1,$(l+".mask"+e).attr("apply",""),f===i.length-1&&$(l).attr("apply","")};$.each(i,function(o,r){if(h[b]){var n=0!==e.level?h[r].color:h[b].children[r].color;$(t+" .shape"+r).attr({fill:n,stroke:n,opacity:0}),$(t+" .shape"+r).finish().delay(40*o).animate({opacity:"0"},{duration:30*o,easing:"easeInOutQuad",complete:function(){g(r)}})}}),null!==y&&0===e.level&&A(y),null!==w&&0!==e.leve&&_(w)}function c(e,o,r){$(".side-info").animate({opacity:0},400,function(){$(".side-info").html((e?"<h2>"+e+"</h2>":"")+(o?"<p>"+o+"</p>":"")),$(".side-info").animate({opacity:1},r)})}function i(){0===e.level&&$(".side-info p").html()!==F&&(c("",F,600),$(".inner-text").stop().animate({opacity:0},400)),1===e.level&&$(".side-info h2").html()!==h[b].name&&(c(h[b].name,h[b].description,600),$(".inner-text").delay(800).stop().animate({opacity:1},1e3))}function s(e){var o=h[b].children[e];$(".hex").text(o.color),$(".number").text(h[b].name+" "+o.number)}function u(){l(!0),i()}function m(o){E(e.current_color_piece);var r=p.shapeIndex(o.target);e.current_color_piece=r,_(r),s(r),i()}var d=[{color:"#FDD600",name:"Yellow",description:["Most associated with happiness and positivity, yellow ","can promote creativity and activity. A little bit of yellow goes a ","long way, and too much can create a feeling of anxiety. Due to its ","energetic nature, yellow can seem unstable. Culturally, yellow tends ","to take on many meanings including courage and commerce."].join(""),children:[{color:"#FDE876",number:10},{color:"#FDD600",number:20},{color:"#DBB100",number:30},{color:"#BE9B00",number:40},{color:"#8C7300",number:50},{color:"#735F00",number:60},{color:"#574A00",number:70},{color:"#3C3200",number:80},{color:"#281E00",number:90},{color:"#020100",number:100}]},{color:"#8CD211",name:"Green",description:["The sprightly offspring of blue and yellow, green is ","most often associated with nature and growth. It combines the energy ","of yellow with the stability of blue, which makes it a great ","choice for products that wish to communicate a sense of balance ","and reliability. It is also one of a few colors to have many ","positive associations across cultures."].join(""),children:[{color:"#C8F08F",number:10},{color:"#B4E051",number:20},{color:"#8CD211",number:30},{color:"#5AA700",number:40},{color:"#4B8400",number:50},{color:"#2D660A",number:60},{color:"#144D14",number:70},{color:"#0A3C02",number:80},{color:"#0C2808",number:90},{color:"#010200",number:100}]},{color:"#00B4A0",name:"Teal",description:["Efficient and eloquent, teal&rsquo;s coolness tends to lend ","itself to non-emotive qualities. Dark teals are often perceived as ","sophisticated and rich, while paler teals can add a sense of clarity ","and aid in decision making. Due to its calm, collected nature, teal ","can feel objective and indifferent."].join(""),children:[{color:"#A7FAE6",number:10},{color:"#6EEDD8",number:20},{color:"#41D6C3",number:30},{color:"#00B4A0",number:40},{color:"#008571",number:50},{color:"#006D5D",number:60},{color:"#005448",number:70},{color:"#003C32",number:80},{color:"#012B22",number:90},{color:"#000202",number:100}]},{color:"#5596E6",name:"Blue",description:["The coolest of all primary colors, blue evokes imagery ","of clear skies and calm waters. It is often associated with cleanliness ","and tranquility. Blue can be a great choice for instilling a feeling of ","trust and honesty in a product."].join(""),children:[{color:"#C0E6FF",number:10},{color:"#7CC7FF",number:20},{color:"#5AAAFA",number:30},{color:"#5596E6",number:40},{color:"#4178BE",number:50},{color:"#325C80",number:60},{color:"#264A60",number:70},{color:"#1D3649",number:80},{color:"#152935",number:90},{color:"#010205",number:100}]},{color:"#9855D4",name:"Purple",description:["Often times mysterious, purple is one of nature&rsquo;s rarest ","colors, lending itself to a royal and opulent feeling. It has both the ","calming qualities of blue and energetic nature of red. Purple typically ","has many positive associations across cultures. Using purple in your ","design can promote a boost in creativity and the use of imagination."].join(""),children:[{color:"#EED2FF",number:10},{color:"#D7AAFF",number:20},{color:"#BA8FF7",number:30},{color:"#AF6EE8",number:40},{color:"#9855D4",number:50},{color:"#734098",number:60},{color:"#562F72",number:70},{color:"#412356",number:80},{color:"#311A41",number:90},{color:"#030103",number:100}]},{color:"#FF3CA0",name:"Magenta",description:["Encouraging and uplifting, people often feel optimistic ","when they see magenta. It promotes kindness and a sense of balance. An ","inspiring color, magenta can appear overwhelming or demanding when used ","excessively. Products looking to show a compassionate side would benefit ","most from magenta."].join(""),children:[{color:"#FFD2FF",number:10},{color:"#FF9EEE",number:20},{color:"#FF71D4",number:30},{color:"#FF3CA0",number:40},{color:"#DB2780",number:50},{color:"#A6266E",number:60},{color:"#7C1C58",number:70},{color:"#601146",number:80},{color:"#3A0B2E",number:90},{color:"#040102",number:100}]},{color:"#E71D32",name:"Red",description:["Scientifically proven to raise heart rates, red is one of ","the most emotive colors. It is often used to represent love and war, danger ","and desire. Due to its polarizing nature, red should be used most often as ","an accent to enhance certain features and elements, and can be quite effective ","in creating an appearance of a powerful interface."].join(""),children:[{color:"#FFD2DD",number:10},{color:"#FFA5B4",number:20},{color:"#FF7D87",number:30},{color:"#FF5050",number:40},{color:"#E71D32",number:50},{color:"#AD1625",number:60},{color:"#8C101C",number:70},{color:"#6E0A1E",number:80},{color:"#4C0A17",number:90},{color:"#040001",number:100}]},{color:"#FF7832",name:"Orange",description:["A sign of changing seasons, orange can add a sense of ","spontaneity and transformation to your design. It is perceived to be ","the warmest temperature of all colors. Orange generally appeals to ","younger audiences and is universally found to increase appetite. ","Lighter shades of orange tend to be more nurturing and approachable."].join(""),children:[{color:"#FFD791",number:10},{color:"#FFA573",number:20},{color:"#FF7832",number:30},{color:"#FF5003",number:40},{color:"#D74108",number:50},{color:"#A53725",number:60},{color:"#872A0F",number:70},{color:"#6D120F",number:80},{color:"#43100B",number:90},{color:"#030100",number:100}]}],p={};p.range=function(e,o){for(var r=[],n=e;e+o>n;n+=1)r.push(n>=o?n-o:n);return r},p.shapeIndex=function(e){return parseInt(/shape(\d)/g.exec($($(e).attr("class").split(" ")).last()[0])[1])};var h,f=null,b=null,v=!1,g=!1,y=null,w=null,F=["Although the meaning of color can differ from person to person, some ","emotive qualities have been commonly linked to certain colors. For example, ","blues and greens bring to mind the coolness of water; fiery reds and oranges ","add warmth to a design."].join("");e.color_scheme=h,e.level=0,e.current_color_piece=0;var k=function(){0===e.level&&null!==f&&$("#primary .shape"+f).focus(),1===e.level&&null!==e.current_color_piece&&$("#secondary .shape"+e.current_color_piece).focus()},A=function(e){y=e,v||$(".wheel8.mask.mask"+e).attr("apply","true")},D=function(e){var o,r=null;try{o=$(document.activeElement),r=p.shapeIndex(o)}catch(n){}(null===r||null!==r&&r!==e)&&$(".wheel8.mask.mask"+e).attr("apply","")};$("#primary .color-wheel-path").hoverIntent({interval:0,over:function(e){if(t(e)){var o=p.shapeIndex(e.target);A(o)}},out:function(e){if(!v&&t){var o=p.shapeIndex(e.target);D(o)}}}),$("#secondary .color-wheel-path").hoverIntent({interval:0,over:function(e){t(e)&&(w=p.shapeIndex(e.target),s(p.shapeIndex(e.target)))},out:function(o){if(t(o)){s(e.current_color_piece);var r=p.shapeIndex(o.target);e.current_color_piece!==r&&$(".wheel10.mask.mask"+r).attr("apply","")}}}),$(".mask").hoverIntent({interval:0,over:function(){v||1===e.level&&s(w)},out:function(){}}),$(".dl-color-wheel-svg-container").hoverIntent({interval:0,over:function(){},out:function(){}});var x=function(o){if(!v){a();var r=p.shapeIndex(o);f=r,e.level=1,b=r;var n=0;$.each(h[b].children,function(e,o){return o.color.toLowerCase()===h[b].color.toLowerCase()?void(n=e):void 0});var t=r;e.current_color_piece=n,s(r),l(!1,t),i(),$("#primary path").attr("tabindex","-1"),$("#secondary path").attr("tabindex","0"),$(".inner-text .back").attr("tabindex","0")}};$("#primary .color-wheel-path").on("mousedown touchstart",function(o){n(o)&&1===e.level||x(o.target)});var _=function(o){e.current_color_piece=o,$(".wheel10.mask.mask"+e.current_color_piece).attr("apply","true")},E=function(e){$(".wheel10.mask.mask"+e).attr("apply","")};$("#secondary .color-wheel-path").on("mousedown touchstart",function(o){!v&&t(o)&&(s(e.current_color_piece),i())}),$(".mask").on("mousedown touchstart",function(){v||a()});var I=function(){0!==e.level&&(e.level=0,i(),l(!1,e.current_color_piece),$("#primary path").attr("tabindex","0"),$("#secondary path").attr("tabindex","-1"),$(".inner-text .back").attr("tabindex","-1"))};$(".inner-text .back").on("mousedown touchstart",function(){I()}),$(".inner-text .back").on("keyup",function(e){13===e.which&&I()});var C=function(){var e=$(".dl-color-wheel-svg-container"),o=$(e).offset().top+.45*$(e).outerHeight(),r=$(window).scrollTop()+$(window).height();r>o&&!g&&(g=!0,u())};e.$on("$destroy",function(){angular.element(o).off("scroll resize",C)}),h=d,angular.element(o).on("scroll resize",C),$("#secondary path").focus(m).on("click",m),$("#secondary path").blur(function(e){var o=p.shapeIndex(e.target);E(o)}),$("#primary path").focus(function(o){if(0===e.level){var r=p.shapeIndex(o.target);A(r)}}),$("#primary path").blur(function(o){if(0===e.level){var r=p.shapeIndex(o.target);D(r)}});var B=function(o){switch(o.which){case 13:0===e.level&&x(o.target);break;case 27:1===e.level&&I()}};e.wheelKeyUp=B,$(".dl-color-wheel-svg-container svg").keyup(B)}}}]);
angular.module("designsite").controller("easingExampleController",["$scope","$document","$window","$element",function(n,a,i,e){var o="webkitAnimationEnd animationend oAnimationEnd MSAnimationEnd animationend",t=$(".easing-example",e);$(".block",t).on(o,function(){$(t).removeClass("animating-block")}),n.startAnimation=function(){if(!$(t).hasClass("animating-block")){var n=$(".frame-trails",t).parent(),a=$(".frame-trails",t).clone();$(a.children()[1]).on(o,function(){$(t).removeClass("animating-frames")}),$(".frame-trails",t).remove(),$(n).prepend(a),$(t).addClass("animating-block animating-frames")}}}]);
angular.module("designsite").controller("frameworkController",["$scope","$document","$window",function(e,n,o){function t(e){return n[0].getElementById(e)}function r(e){return n[0].getElementsByTagName(e)[0]}function a(e){var n=e.getBoundingClientRect();return n.bottom-n.top}function l(e){return e.getBoundingClientRect().top+n.scrollTop()}function i(){return n.scrollTop()+o.innerHeight}function c(){return n.scrollTop()>f}function u(){return p>i()-l(g)}function s(){var n=!1,o=c();e.isPastFrameworkHero!==o&&(n=!0,e.isPastFrameworkHero=o);var t=u();e.isScrollToTopElementFixed!==t&&(n=!0,e.isScrollToTopElementFixed=t),n&&e.$apply()}function v(n){!$.contains($(".hero-nav")[0],n.target)&&e.isPastFrameworkHero&&angular.element(".dangly-activator").removeClass("active")}e.scrollToTop=function(){n.scrollTopAnimated(0),angular.element("#navbar-brand-language").focus()};var m=t("framework-hero"),f=a(m),d=!!t("next-framework-section"),g=d?t("next-framework-section"):r("footer"),p=parseInt(o.getComputedStyle(t("scroll-to-top")).bottom);e.isPastFrameworkHero=c(),e.isPastFrameworkHero&&angular.element(".dangly-activator").removeClass("active"),e.isScrollToTopElementFixed=u(),e.isNextBarPresent=d,angular.element(o).on("scroll",s),angular.element(o).on("resize",s),$("body").on("click",v),$("body").on("focusin",v),$(".hero-nav.nav-list").on("keyup",function(n){27===n.keyCode&&e.isPastFrameworkHero&&angular.element(".dangly-activator").removeClass("active")}),$(".hero-nav .nav-list.nav-level-1").on("toggled",function(){$(".hero-nav .nav-item.nav-level-1.active:first-child").removeClass("active")})}]).directive("heroNavTabPlaceholder",["$document","$timeout",function(e,n){return{link:function(o,t){t.focus(function(){e.scrollTop(0),n(function(){angular.element(".hero-nav a.nav-level-1").first().focus()})})}}}]).directive("heroNavBacktabPlaceholder",["$document","$timeout",function(e,n){return{link:function(o,t){t.focus(function(){e.scrollTop(0),n(function(){angular.element(".hero-nav a.nav-level-1, .hero-nav .nav-level-1.active a.nav-level-2").last().focus()})})}}}]);
angular.module("designsite").directive("gifPlayer",["$rootScope",function(t){return{retrict:"E",link:function(a,e,i){function l(){o||(o=!0,s.removeClass("stopped"),s.addClass("playing"),s.attr("title",i.stopLabel),c.attr("src",i.animatedImg),c.attr("alt",i.animatedImgAlt))}function n(){o&&(o=!1,s.removeClass("playing"),s.addClass("stopped"),s.attr("title",i.playLabel),c.attr("src",i.startImg),c.attr("alt",i.startImgAlt))}function r(){t.activePlayer=e,t.$apply(),(o?n:l)()}var o=!1,c=e.find("img"),s=e.find(".play-button");t.$watch("activePlayer",function(){t.activePlayer!==e&&n()}),s.on("click",r),s.on("blur focusout",n)}}}]);
angular.module("designsite").directive("scrollFix",["$timeout",function(e){return{restrict:"A",link:function(){angular.element(".main, .dp-footer").on("focusin",function(t){e(function(){var e=angular.element("header .top-bar").eq(0)[0].getBoundingClientRect().height,n=t.target.getBoundingClientRect(),o=e-n.top,i=angular.element(document);n.bottom>=0&&o>0&&i.scrollTop(i.scrollTop()-o-10)})})}}}]);
angular.module("designsite").directive("darkHero",["$window",function(e){return{restrict:"A",link:function(o,n){function t(){n[0].getBoundingClientRect().bottom<=r?d.addClass("dark-hero-off"):d.removeClass("dark-hero-off")}$(".dl-home-hero").setCssSupportingVhVw({height:"100vh"});var d=angular.element(document).find("body"),r=$(".top-bar").height();angular.element(document).ready(function(){function e(){$(".home-hero-text").addClass("fade-in-text-once-video-is-loaded")}var o=$(".dl-home-hero video");0===o.length?($(".home-hero-text").addClass("immediate"),$(".dl-home-hero .background-video-container img").one("load",e)):$(o).one("play",e)}),angular.element(e).on("scroll resize",t),t()}}}]);
angular.module("designsite").directive("imageIterator",["$interval",function(r){var n,e;return e=function(e,t){n=t.find("img").length,e.current=0,r(function(){n===e.current+1?e.current=0:e.current+=1},2e3)},{link:e,restrict:"E"}}]);
angular.module("designsite").controller("inspirationController",["$scope","$window","$document","$timeout",function(e,o,n,t){var r=angular.element(n[0].body);e.openShowcase=function(o){e.currentInspiration=o,r.addClass("inspiration-showcase-open")},e.closeShowcase=function(){delete e.currentInspiration,delete e.currentZoom,r.removeClass("inspiration-showcase-open")},e.openZoom=function(o,n){e.currentZoom=o,e.currentZoomReturn=n.currentTarget.id,t(function(){angular.element(".inspiration-showcase-zoom").focus()})},e.closeZoom=function(o){o.keyCode&&27!==o.keyCode||(delete e.currentZoom,e.currentZoomReturn&&t(function(){document.getElementById(e.currentZoomReturn).focus(),delete e.currentZoomReturn}))},e.inspirations=o.inspirations}]);
angular.module("designsite").controller("linkButtonsController",["$scope","$element",function(t,n){var i=function(){n.find(".link-button").removeClass("focused-child")},o=function(t){i(),t.closest(".link-button").addClass("focused-child")};n.find(".link-button-list-item a").focus(function(){o($(this))}),n.find(".link-button-list-item a").blur(function(){i()}),n.find(".link-button .link-button-glass-pane").on("touchend click",function(t){t.preventDefault(),t.stopPropagation(),$(this).closest(".link-button").find(".link-button-list-item a")[0].focus()}),n.find(".link-button-list-item svg").attr("focusable","false")}]);
angular.module("designsite").controller("mobileNavigationController",["$scope","$document",function(e,t){function i(e,t){for(var i=angular.element(t);i.parent().length>0;)if(i=angular.element(i.parent()),e.isEqualNode(i[0]))return!0;return!1}var n=t[0].getElementById("mobile-nav-container"),o=t[0].getElementById("hamburger-icon");e.mobileNavVisibility=!1,e.toggleMobileNavVisibility=function(){e.mobileNavVisibility=!e.mobileNavVisibility};var l=function(e){return e.isEqualNode(o)||i(n,e)||e.isEqualNode(n)};e.testCloseNav=function(t){var i=!1;if(e.mobileNavVisibility)switch(t.type){case"keyup":i=27===t.keyCode;break;case"focusout":i=t.relatedTarget&&!l(t.relatedTarget);break;default:i=t.target&&!l(t.target)}i&&(e.toggleMobileNavVisibility(),e.$apply())},angular.element(n).on("focusout",function(t){e.testCloseNav(t)})}]).directive("mobileNavCloser",function(){return{restrict:"A",link:function(e,t){t.on("click",function(t){e.testCloseNav(t)}),t.on("keyup",function(t){e.testCloseNav(t)})}}});
angular.module("designsite").directive("toggleClassWhenClicked",function(){return{link:function(e,l,n){l.on("click",function(e){l.toggleClass(n.toggleClassWhenClicked),l.hasClass("active")||$(l).blur(),e.preventDefault()})}}});
angular.module("designsite").directive("tabbedSection",function(){return{link:function(e,n){var t=uuid.v4();n.ready(function(){$(".tab-header",n).each(function(e,n){$(n).attr("href","#"+t+"-"+e)}),$(".tab-content",n).each(function(e,n){$(n).attr("id",t+"-"+e)}),$(n[0]).responsiveTabs({collapsible:!1})})}}});
Function.prototype.clone=function(){var n,t=this,r=function(){return t.apply(this,arguments)};for(n in this)r[n]=this[n];return r},function(n,t){function r(n){var t=n.match(/[\d.]+/)[0]/100,r=n.match(/[vwh]+/)[0];return("vh"===r?e.height():e.width())*t+"px"}function i(n){var t,i;for(t in n)i=n[t],/[vwh]$/.test(i)&&(n[t]=r(i));return n}var e=n(t);n.fn.setCssSupportingVhVw=n.fn.css.clone();var s=n.fn.setCssSupportingVhVw;n.fn.setCssSupportingVhVw=function(t){var r=this,o=function(){return s.call(r,i(n.extend({},t)))};return e.resize(o).resize(),o()}}(window.jQuery,window);
angular.module("designsite").directive("videoBuildUp",function(){var e=function(){return!(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i))},t=function(){return function(t,a,r,n,i){i(t.$new(),function(t){var n,i,o,c,u,s,l;l=r.useControls?r.useControls.toLowerCase():"false",s="true"===l,n="never"!==l||e(),angular.forEach(t.children(),function(e){var t,a,r;switch(t=angular.element(e),r=e.nodeName.toUpperCase()){case"SOURCE":if(void 0===o)try{a=t.attr("type").split("/")[1].toLowerCase(),"mp4"===a&&(a="h264"),Modernizr.video[a]&&(o=t)}catch(n){a=void 0}break;case"IMG":void 0===u&&(u=t);break;case"TRACK":c=t}}),!o||!n&&u?u&&a.replaceWith(u):(i=angular.element("<video></video>"),angular.forEach(t[0].attributes,function(e){i.attr(e.nodeName,e.value)}),s&&i.attr("controls","controls"),i.attributes=t.attributes,i.append(o),c&&i.append(c),a.replaceWith(i))})}};return{restrict:"E",compile:t,transclude:"element",scope:{},replace:!0}});