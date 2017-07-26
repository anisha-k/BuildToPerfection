window.onload=addDate('note1');
var i = 0;
function addNote() {
	i++;
	console.log("i: " + i);
	var notesRef = document.getElementById("notes");
	var rowCount = notesRef.rows.length;
	var rowRef = rowCount < 6 ? notesRef.insertRow(rowCount) : notesRef.rows[(2*i - 6) % 6];
	var cellRef = rowRef.insertCell(Math.floor(2*i / 6));
	var note = document.createElement("textarea");
	var colorList = ["#F0FF33", "#FFE933", "#33FFB2", "#33FFE0", "#EC33FF", "#FF33F6", "#DFBED4"];
	note.style.backgroundColor = colorList[Math.floor(Math.random() * colorList.length)];
	console.log("x: " + rowRef.rowIndex + ", y: " + cellRef.cellIndex + ", color: " + note.style.backgroundColor);
	var date = new Date();
	note.id = "note"+date.getDate()+date.getHours()+date.getMinutes()+date.getSeconds()+date.getMilliseconds();
	note.ondblclick = addNote;
	cellRef.appendChild(note);
	addDate(note.id);
	note.keydown = updateDate(note.id);
}
function addDate(noteId) {
	console.log("noteId addDate: " + noteId);
	var noteRef = document.getElementById(noteId);
	var notesRef = document.getElementById("notes");
	var dateRowRef = notesRef.insertRow(noteRef.parentNode.parentNode.rowIndex);
	var dateCellRef = dateRowRef.insertCell(noteRef.parentNode.cellIndex);
	var noteDateLbl = document.createElement("LABEL");
	noteDateLbl.id = "date"+noteId.substring(4);
	console.log("noteDateLblId: " + noteDateLbl.id);
	noteDateLbl.style.backgroundColor = noteRef.style.backgroundColor;
	noteDateLbl.innerHTML = "Last modified: "+ (new Date()).toLocaleString();
	dateCellRef.appendChild(noteDateLbl);
	//console.log("date x: " + noteDateLbl.parentNode.parentNode.rowIndex + ", y: " + noteDateLbl.parentNode.cellIndex + ", color: " + noteRef.style.backgroundColor);
}
function updateDate(noteId) {
	console.log("noteId updateDate: " + noteId);
	var noteDateLbl = document.getElementById("date"+noteId.substring(4));
	noteDateLbl.innerHTML = "Last modified: "+ (new Date()).toLocaleString();
}