angular.module("commonFilter",[]).filter("string2Date",function(){return function(t){var n=new Date(t.replace(/-/g,"/"));return n}}).filter("trustHtml",["$sce",function(t){return function(n){return t.trustAsHtml(n)}}]).filter("array2Date",function(){return function(t){if(void 0!==t){var n=t.slice(0,3).join("/"),r=t.slice(3,6).join(":"),e=new Date([n,r].join(" "));return e}}});