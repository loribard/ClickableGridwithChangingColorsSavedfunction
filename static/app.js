var lastClicked;
var el;
var html;
var list = [];

var grid = clickableGrid(rows,columns,function(el,row,col,i){
console.log("You clicked on element:",el);
console.log("You clicked on row:",row);
console.log("You clicked on col:",col);
console.log("You clicked on item #:",i);
var color = setColor();
console.log("COLOR",color);
el.style.backgroundColor = color;
el.className='clicked';
list.push(el);
console.log(list);
});

document.body.appendChild(grid);

function setColor() {
var letters = "0123456789ABCDEF";
var color = '#';
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

function clickableGrid( rows, cols, callback ){
var i=0;
var grid = document.createElement('table');

grid.className = 'grid';
for (var r=0;r<rows;++r){
var tr = grid.appendChild(document.createElement('tr'));
for (var c=0;c<cols;++c){
var cell = tr.appendChild(document.createElement('td'));
cell.innerHTML = ++i;
cell.addEventListener('click',(function(el,r,c,i){
return function(){
callback(el,r,c,i);
}
})(cell,r,c,i),false);
}
}

return grid;
}

  function myFunction() {
    location.reload();
    console.log("Resetting");
  }


function mySavedHTML() {
  myhtml = $('table').html();
  console.log(myhtml,typeof myhtml);
  $.ajax({
    type:"POST",
    url: '/postmethod',
    data: {html:myhtml}
  });
}

 



