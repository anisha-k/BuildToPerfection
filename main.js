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
	var colorList = ["#F0FF33", "#FFE933", "#33FFB2", "#33FFE0", "#DFBED4", "#F6E1FF", "#E0EAFF", "#DBFFF3", "#FFD6E4", "#EDFFD1"];
	note.style.backgroundColor = colorList[Math.floor(Math.random() * colorList.length)];
	console.log("note x: " + rowRef.rowIndex + ", y: " + cellRef.cellIndex + ", color: " + note.style.backgroundColor);
	var date = new Date();
	var noteId = "note"+date.getDate()+date.getHours()+date.getMinutes()+date.getSeconds()+date.getMilliseconds();
	note.id = noteId;
	note.ondblclick = addNote;
	note.addEventListener('change', updateDate);
	cellRef.appendChild(note);
	addDate(note.id);
	//note.onchange = updateDate(noteId);
}
function addDate(noteId) {
	console.log("noteId addDate: " + noteId);
	var noteRef = document.getElementById(noteId);
	var notesRef = document.getElementById("notes");
	var rowCount = notesRef.rows.length;
	var nextRow = noteRef.parentNode.parentNode.rowIndex+1;
	var dateRowRef = rowCount < 6 ? notesRef.insertRow(nextRow) : notesRef.rows[nextRow];
	var dateCellRef = dateRowRef.insertCell(noteRef.parentNode.cellIndex);
	console.log("date x: " + dateRowRef.rowIndex + ", y: " + dateCellRef.cellIndex);
	var noteDateLbl = document.createElement("LABEL");
	noteDateLbl.id = "date"+noteId.substring(4);
	console.log("noteDateLblId: " + noteDateLbl.id);
	noteDateLbl.style.backgroundColor = noteRef.style.backgroundColor;
	noteDateLbl.style.borderRightColor = noteRef.style.backgroundColor;
	noteDateLbl.innerHTML = "Last modified: "+ (new Date()).toLocaleString();
	dateCellRef.appendChild(noteDateLbl);
	console.log("note x: " + noteRef.parentNode.parentNode.rowIndex + ", y: " + noteRef.parentNode.cellIndex);
	console.log("date x: " + noteDateLbl.parentNode.parentNode.rowIndex + ", y: " + noteDateLbl.parentNode.cellIndex);
}
function updateDate(evt) {
	//console.log("noteId updateDate: " + noteId);
	console.log("evt target: " + evt.target.id);
	var noteId = evt.target.id;
	var noteDateLbl = document.getElementById("date"+noteId.substring(4));
	if (noteDateLbl != null) {
		noteDateLbl.innerHTML = "Last modified: "+ (new Date()).toLocaleString();
	}
}