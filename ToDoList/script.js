var counter = 1;
var changeID=0;

var arrayList = [];

//add new element in the list
function addElement() {
    var list = document.getElementById("list");
    list.innerHTML += `<li class="listElement" id="task${counter}">task${counter}</li>`;

    list.innerHTML += `<button class="button1 no-print" id="task${counter}Change" onClick=showChange(this.id)><img src=https://cdn-icons-png.flaticon.com/512/1014/1014900.png height=20px></button>`;
    list.innerHTML += `<button class="button1 no-print" id="task${counter}Check" onClick="cancel(this.id)"><img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" height=20px></button>`;
    list.innerHTML += `<button class="button1 no-print" id="task${counter}Remove" onClick="remove(this.id)"><img src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" height=20px></button></div>`;

    document.getElementById("formNew").style.visibility = "visible";
    document.getElementById("addElement").disabled = true;
}
//add text in the new element
function newText(){
    if(document.getElementById("textNew").value!=""){
        document.getElementById("task"+counter).innerHTML = document.getElementById("textNew").value;
        arrayList.push(document.getElementById("textNew").value);
    }
    document.getElementById("formNew").style.visibility = "hidden";
    document.getElementById("addElement").disabled = false;
    counter++;
}
//show change text form
function showChange(id){
    document.getElementById("formChange").style.visibility = "visible";
    document.getElementById("addElement").disabled = true;
    changeID = id.slice(0, -6);
}
//change text
function changeTxt(){
    var textChaged = document.getElementById("textChange").value;
    document.getElementById(changeID).innerHTML = textChaged;
    document.getElementById("formChange").style.visibility = "hidden";
    document.getElementById("addElement").disabled = false;
}
//task done
function cancel(id){
    var idElement = id.slice(0, -5);
    var element = document.getElementById(idElement);
    if(element.style.color == "rgb(173, 173, 173)"){
        element.style.color = "black";
        element.style.textDecoration = "none";
    }else{
        element.style.color = "rgb(173, 173, 173)";
        element.style.textDecoration = "line-through";
    }
}
//remove task
function remove(id){
    var idElement = id.slice(0, -6);

    document.getElementById("formNew").style.visibility = "hidden";
    document.getElementById("formChange").style.visibility = "hidden";
    document.getElementById("addElement").disabled = false;

    document.getElementById(idElement+"Change").remove();
    document.getElementById(idElement+"Check").remove();
    document.getElementById(id).remove();
    document.getElementById(idElement).remove();
}