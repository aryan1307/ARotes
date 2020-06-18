
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {

  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
 
  notesObj.push(addTxt.value);


  localStorage.setItem("notes", JSON.stringify(notesObj));

  addTxt.value = "";
  console.log(notesObj);
  viewNotes();
})
function viewNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach(function (element, index) {
    html += ` <div class="card" style="width: 18rem;">

    <div class="card-body" id="body">
      <h5 class="card-title">Note ${index + 1}</h5>
      <p class="card_text">${element + 1}</p>
      <button class="btn btn-primary" id="${index}"onclick='deleteNote(this.id)'>Delete Note</button>

    </div>
  </div>`});
  let notesMem=document.getElementById("notes");
  if(notesObj.length!=0){
  notesMem.innerHTML=html;
}


}
function deleteNote(index){

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
 viewNotes();
}