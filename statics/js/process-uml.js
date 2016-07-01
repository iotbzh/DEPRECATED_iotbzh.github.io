/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
console.log ("process UML");

document.ready(function() {
    // Example diagrams
    //$('.diagram').sequenceDiagram();
    console.log ("document ready");
    var elements = document.getElementsByTagName('code');
      for(var i=0; i<elements.length; i++) {
        var input = elements[i]; 
        alert(input.value+': '+input.checked);
      }
  });

