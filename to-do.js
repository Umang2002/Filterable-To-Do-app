var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var input = document.getElementById("item");

// var information = document.getElementById("info");
var information = document.querySelector("#info")
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);
//info event
itemList.addEventListener("click",addinfor);


var info = localStorage.getItem("info")? JSON.parse(localStorage.getItem("info")) : [];
localStorage.setItem("info",JSON.stringify(info));
var data =JSON.stringify( localStorage.getItem("info"));

function addinfor(e){
  e.preventDefault();
  if (e.target.classList.contains("info")){
  var div = document.createElement("div");
  div.setAttribute("id","info");
  console.log(div)
  }
}

$(document).ready(function(){
  $("#info").click(function(){
    $("#panel").slideToggle("slow");
  });
});


function limaker(text){
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = text;
    itemList.appendChild(li);
    var deletebtn = document.createElement("button");
  
    //class
    deletebtn.className = "btn btn-danger btn-sm float-right delete";
  
    //add in li
  
    deletebtn.appendChild(document.createTextNode("X"));
    li.appendChild(deletebtn);
    itemList.appendChild(li);

    
    
}

function addItem(e){
  e.preventDefault();

   limaker(input.value);
   
   info.push(input.value);
  localStorage.setItem("info", JSON.stringify(info));

}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Filterable to-do app 
console.log(li)
