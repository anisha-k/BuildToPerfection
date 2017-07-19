var i = 0;
function addNote() {
	i++;
	console.log("i: " + i);
	var notesRef = document.getElementById("notes");
	var rowCount = notesRef.rows.length;
	var rowRef = rowCount < 4 ? notesRef.insertRow(rowCount) : notesRef.rows[(i - 4) % 4];
	var cellRef = rowRef.insertCell(Math.floor(i / 4));
	var note = document.createElement("textarea");
	var colorList = ["#F0FF33", "#FFE933", "#33FFB2", "#33FFE0", "#EC33FF", "#FF33F6", "#DFBED4"];
	note.style.backgroundColor = colorList[Math.floor(Math.random() * colorList.length)];
	console.log("x: " + rowRef.rowIndex + ", y: " + cellRef.cellIndex + ", color: " + note.style.backgroundColor);
	note.ondblclick = addNote;
	cellRef.appendChild(note);
	//cellRef.style.width = "200px";
	//cellRef.style.height = "200px";
}
function updateDate() {
	var noteRef = document.getElementById("note");
	console.log("note x: " + noteRef.parent().rowIndex + ", y: " + noteRef.cellIndex + ", color: " + noteRef.style.backgroundColor);
	var noteDate = document.createElement("textbox");
	noteDate.value = "Last modified: "+ new Date();
}