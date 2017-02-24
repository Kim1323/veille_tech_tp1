
var lettreT = document.querySelectorAll("#svg_animTIM path")[0];
var lettreT2 = document.querySelectorAll("#svg_animTIM path")[1];
var lettreI = document.querySelectorAll("#svg_animTIM path")[2];
var lettreM = document.querySelectorAll("#svg_animTIM path")[3];
var longueurT = lettreT.getTotalLength();
var longueurT2 = lettreT2.getTotalLength();
var longueurI = lettreI.getTotalLength();
var longueurM= lettreM.getTotalLength();

lettreT.style.strokeDasharray = longueurT;
lettreT2.style.strokeDasharray = longueurT2;
lettreI.style.strokeDasharray = longueurI;
lettreM.style.strokeDasharray = longueurM

lettreT.style.strokeDashoffset = longueurT;
lettreT2.style.strokeDashoffset = longueurT2;
lettreI.style.strokeDashoffset = longueurI;
lettreM.style.strokeDashoffset = longueurM;

window.addEventListener("scroll", maTrace);

function maTrace() {
  var fractionDuScroll = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var traceT = longueurT * fractionDuScroll;
  var traceT2 = longueurT2 * fractionDuScroll;
  var traceI = longueurI * fractionDuScroll;
  var traceM = longueurM * fractionDuScroll;

  lettreT.style.strokeDashoffset = longueurT - traceT ;
  lettreT2.style.strokeDashoffset = longueurT2 - traceT2 ;
  lettreI.style.strokeDashoffset = longueurI - traceI ;
  lettreM.style.strokeDashoffset = longueurM- traceM ;
}
