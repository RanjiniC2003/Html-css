function menu() {
	var menubutton= document.getElementById("planet");
	menubutton.classList.add("items");
	menubutton.classList.add("positions");

}
function closeitems() {
	var menubutton=document.getElementById("planet");
	menubutton.classList.remove("items");
	menubutton.classList.remove("positions");
}
