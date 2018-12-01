
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],],undefined,{path:"./pages/message/wode/wode.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/message/wode/wode.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      