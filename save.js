var fs = require('fs');
var json = require('../back/jsonFiles/data.json');

window.onload = function(){
  var y = 0;
  var x = 0;
  var maxRender = 64;


  for(var a=0; a<json.length; a++){
      //console.log(json[a].colone1,json[a].colone2,json[a].colone3 );
      if(a <maxRender){
        ImpressConstructor(a);
      }
      if(a == maxRender){
        impress().init();
      }
  }

  function ImpressConstructor(index){
      if( index == 8 || index == 16 || index == 24 || index == 32 || index == 40 || index == 48 || index == 56){
        y = 1100;
        x = x + 2000;
      }else{
        y = y + 1000;
      }

      var element = document.createElement('div');
      element.setAttribute("id", "data"+a);
      element.setAttribute("class", "step");
      element.setAttribute("data-x", x);
      element.setAttribute("data-y", y);
      element.setAttribute("data-scale", "10");
        var title = document.createElement('H2');
        var titleText = document.createTextNode(json[index].colone1 +"  "+json[index].colone2 );
        title.appendChild(titleText);

        var info = document.createElement('H4');
        var infoText = document.createTextNode(json[index].colone3);
        info.appendChild(infoText);

      element.appendChild(title);
      element.appendChild(info);
      document.getElementById("renderer").appendChild(element);
  }

  // add button back
  // gsap transaction

  var add = document.getElementById("add");
  var uploader = document.getElementById("uploader");
  Boolean(open);

  add.onclick = function(){
    if(open){
      // USE GSAP
      uploader.style.bottom = '5vh';
      open = false;
    }else{
      uploader.style.bottom = '-35vh';
      open = true;
    }
  }


  // click sur container mais pas sur impress // on click go to http://localhost:9000/#
  var contain = document.getElementById('container');
  var data = document.getElementById('overview');

  var infoContain = contain.getBoundingClientRect();
  var infoData = data.getBoundingClientRect();

  contain.onclick = function(){
    returnCenter();
  }

  function returnCenter(){
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // console.log(infoContain.width, infoContain.height );
    // console.log(infoData.width, infoData.height );
    // console.log(mouseX, mouseY);
    // console.log("-----------");
  }



}
