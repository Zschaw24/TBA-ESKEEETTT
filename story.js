var audio = new Audio('Murda.mp3');
audio.play();
var audiobarb= new Audio('barbarian.mp3');
var audiorog= new Audio('Lil Pump - Eskeetit.mp3');
var audiowiz= new Audio('LUNTA! (Ice Wizard Sound).mp3');
var audiowitch= new Audio('Magical Sound Effect 8.mp3');
var audioheal=new Audio('heal.mp3');
var audioarcher=new Audio('Clash Of Clans Archer Sound Effect.mp3');
var audiojungle=new Audio ('jungle.mp3');
var audiodesert=new Audio('desert.mp3');

var gold= 500;
var health= 100;

var inventory = [];

inventory.push("Gold = "+gold);
inventory.push(" Health = "+health);

document.getElementById('inv_box').innerHTML=inventory

document.getElementById("s1").style.display="block";

document.getElementById('s1c1').addEventListener('click',function(){
document.getElementById('s2').style.display='block'
document.getElementById('s1c2').style.display='none'


});

document.getElementById('s1c2').addEventListener('click',function(){
document.getElementById('s3').style.display='block'
document.getElementById('s1c1').style.display='none'
});

document.getElementById('s2c1').addEventListener('click',function(){
  inventory.push('Dagger');
  inventory.push(' Mask');
  audiorog.play();


     document.getElementById("inv_box").innerHTML=inventory;
 document.getElementById('s4').style.display='block'
  document.getElementById('s2c2').style.display='none'
  document.getElementById('s2c3').style.display='none'
});

document.getElementById('s2c2').addEventListener('click',function(){
  inventory.push('Sword');
  inventory.push(' Helmet ');
  audiobarb.play();
     document.getElementById("inv_box").innerHTML=inventory;
  document.getElementById('s4').style.display='block'
  document.getElementById('s2c1').style.display='none'
  document.getElementById('s2c3').style.display='none'

});

document.getElementById('s2c3').addEventListener('click',function(){
  inventory.push('Spellbook');
  inventory.push(' Wand');
  audiowiz.play();
     document.getElementById("inv_box").innerHTML=inventory;
  document.getElementById('s4').style.display='block'
  document.getElementById('s2c1').style.display='none'
  document.getElementById('s2c2').style.display='none'
});

document.getElementById('s3c1').addEventListener('click',function(){
  inventory.push('Potion of healing');
  inventory.push(' Staff');
  audioheal.play();
     document.getElementById("inv_box").innerHTML=inventory;
  document.getElementById('s4').style.display='block'
  document.getElementById('s3c2').style.display='none'
  document.getElementById('s3c3').style.display='none'
});

document.getElementById('s3c2').addEventListener('click',function(){
  inventory.push('Bow and Arrows');
  inventory.push(' Chainmail');
  audioarcher.play();
     document.getElementById("inv_box").innerHTML=inventory;
  document.getElementById('s4').style.display='block'
  document.getElementById('s3c1').style.display='none'
  document.getElementById('s3c3').style.display='none'

});

document.getElementById('s3c3').addEventListener('click',function(){
  inventory.push('Spellbook');
  inventory.push(' Staff');
  audiowitch.play();
     document.getElementById("inv_box").innerHTML=inventory;
  document.getElementById('s4').style.display='block'
  document.getElementById('s3c1').style.display='none'
  document.getElementById('s3c2').style.display='none'
});

document.getElementById('s4c1').addEventListener('click',function(){
  //alert("test 1");
  audiowiz.pause();
    audiowitch.pause();
      audiorog.pause();
        audiobarb.pause();
          audioheal.pause();
            audioarcher.pause();
  audio.pause();
  audiojungle.play();
  document.getElementById('s5').style.display='block'
  document.getElementById('s4c2').style.display='none'
});

document.getElementById('s4c2').addEventListener('click',function(){
  //alert("test 2");
  audiowiz.pause();
    audiowitch.pause();
      audiorog.pause();
        audiobarb.pause();
          audioheal.pause();
            audioarcher.pause();
  audio.pause();
  audiodesert.play();
  document.getElementById('s6').style.display='block'
  document.getElementById('s4c1').style.display='none'

});
document.getElementById('s5c1').addEventListener('click',function(){
  document.getElementById('s7').style.display='block'
  document.getElementById('s5c2').style.display='none'
});
document.getElementById('s5c2').addEventListener('click',function(){
  document.getElementById('s7').style.display='block'
  document.getElementById('s5c1').style.display='none'
});

document.getElementById('s5c1').addEventListener('click',function(){
alert("You can not go that way");
 var a= prompt("Would you like to start over?")
if (a=='yes'){
location.reload();
}
else { alert('Game Over')}
});

document.getElementById('s5c2').addEventListener('click',function(){
  alert('You can not go that way')
  var a= prompt("Would you like to start over?")
 if (a=='yes'){
 location.reload();
 }
 else { alert('Game Over')}

});

document.getElementById('s6c1').addEventListener('click',function(){
  alert('You can not go that way')
  var a= prompt("Would you like to start over?")
 if (a=='yes'){
 location.reload();
 }
 else { alert('Game Over')}
});
document.getElementById('s6c2').addEventListener('click',function(){
  alert('You can not go that way')
  var a= prompt("Would you like to start over?")
 if (a=='yes'){
 location.reload();
 }
 else { alert('Game Over')}
});
