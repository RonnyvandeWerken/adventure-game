var gamecontainer = document.getElementById("game-container");
var description = document.getElementById("description");
var title = document.getElementById("title");

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var img =  document.getElementById("inventoryItem");
var inventory = [ keycard = false, CEOKey = false, code = false];

title.innerHTML = "The Last Hope";
description.innerHTML = "You are a R.A.M. mercenary hired to retrieve classefied documents from a bunker";
button2.innerHTML = "START";

img.style.display = "none"

button1.disabled = true;
button1.style.display = "none";
button2.disabled = false;
button2.style.display = "";
button3.disabled = true;
button3.style.display = "none";

button1.onclick = C1Entry;
button2.onclick = C1Entry;
button3.onclick = C1Entry;


function C1Entry () {
	gamecontainer.style.backgroundImage = "url(images/bunker-outside.jpg)";
	title.innerHTML = "chapter 1 the entry";
	description.innerHTML = "you are at the entrance of the bunker";
	button1.innerHTML = "Guard room";
	button2.innerHTML = "security door";
	button3.innerHTML = "lockerroom";
	
	button1.disabled = false;
	button1.style.display = "";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = false;
	button3.style.display = "";

	button1.onclick = C1GuardRoom;
	button2.onclick = C1SecurityDoorNoKeyCard;
	button3.onclick = C1LockerRoom;

    img.style.display = "none"
    console.log("hoi");
} 

function C1GuardRoom () {
	gamecontainer.style.backgroundImage = "url(images/GuardRoom.jpg)";
	title.innerHTML = "chapter 1 The Guard Room"
	description.innerHTML = "you walk into the Guard Room"
	button1.innerHTML = "Armory";
	button2.innerHTML = "Entry";
	button3.innerHTML = "";

	button1.disabled = false;
	button1.style.display = "";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = true;
	button3.style.display = "none";

	button1.onclick = C1Amory;
	button2.onclick = C1Entry;
	button3.onclick = C1LockerRoom;
	img.src = "images/keycard.png";
	img.style.margin = "180px 0px 0px 190px"
	img.style.display = ""

	img.onclick = getkeycard;

	if (inventory.keycard === true) {
		img.style.display = "none"
	}
}

function C1Amory () {
	gamecontainer.style.backgroundImage = "url(images/armory.jpg)";
	title.innerHTML = "chapter 1 The Armory"
	description.innerHTML = "you walk into a the Armory"
	button1.innerHTML = "take the suplies and leave";
	button2.innerHTML = "GuardRoom";
	button3.innerHTML = "";

	button1.disabled = false;
	button1.style.display = "";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = true;
	button3.style.display = "none";

	img.style.display = "none"

	button1.onclick = C1Leave;
	button2.onclick = C1GuardRoom
	button3.onclick = C1LockerRoom;
}

function C1Leave () {
	gamecontainer.style.backgroundImage = "url(images/traitor.jpg)";
	title.innerHTML = "the traitor"
	description.innerHTML = "you took the suplies out of the armory and abondend you Mission  you TRAITOR!!!!"
	button1.innerHTML = "";
	button2.innerHTML = "restart";
	button3.innerHTML = "";

	button1.disabled = true;
	button1.style.display = "none";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = true;
	button3.style.display = "none";

	button1.onclick = C1Leave;
	button2.onclick = C1Entry;
	button3.onclick = C1LockerRoom;

	img.style.display = "none"

	inventory.keycard = false;
	inventory.CEOKey = false;
	inventory.code = false;

}


function C1SecurityDoorNoKeyCard () {
	gamecontainer.style.backgroundImage = "url(images/bunkerdoor.jpg)";
	title.innerHTML = "chapter 1 The Door"
	description.innerHTML = "you walked to the vault door but it looks like it needs a keycard "
	button1.innerHTML = "try open the door without a keycard";
	button2.innerHTML = "go back";
	button3.innerHTML = "open With keycard";

	button1.disabled = false;
	button1.style.display = "";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = true;
	button3.style.display = "none";

	img.style.display = "none"


	button1.onclick = C1YouDied;
	button2.onclick = C1Entry;
	button3.onclick = C1LockerRoom;
	
	if (inventory.keycard === true) {
		button3.style.display = "";
		button3.disabled = false;
		button3.onclick = C2TheBunker;
	}

}

function C1YouDied () {
	gamecontainer.style.backgroundImage = "url(images/`youdied.png)";
	title.innerHTML = "YOU ARE DEAD"
	description.innerHTML = "you tried to open the door without the keycard and the security was turned on "
	button1.innerHTML = "";
	button2.innerHTML = "restart";
	button3.innerHTML = "";

	button1.disabled = true;
	button1.style.display = "none";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = true;
	button3.style.display = "none";

	img.style.display = "none"

	button1.onclick = C1GuardRoom;
	button2.onclick = C1Entry;
	button3.onclick = C1LockerRoom;

	inventory.keycard = false;
	inventory.CEOKey = false;
	inventory.code = false;
}

function C1LockerRoom () {
	gamecontainer.style.backgroundImage = "url(images/LockerRoom.jpg)";
	title.innerHTML = "chapter 1 The Document Room"
	description.innerHTML = "you walk into the lockerroom"
	button1.innerHTML = "";
	button2.innerHTML = "Entry";
	button3.innerHTML = "";

	button1.disabled = true;
	button1.style.display = "none";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = true;
	button3.style.display = "none";

	img.style.display = "none"

	button1.onclick = C1GuardRoom;
	button2.onclick = C1Entry;
	button3.onclick = C1LockerRoom;
}

function getkeycard () {
	inventory.keycard = true;
	img.style.display = "none"
}

function C2TheBunker () {
	gamecontainer.style.backgroundImage = "url(images/hallway.jpg)";
	title.innerHTML = "chapter 2 inside the bunker"
	description.innerHTML = "you are now in the mainhall of the bunker"
	button1.innerHTML = "Office";
	button2.innerHTML = "Entry";
	button3.innerHTML = "Sleeping Quarters";

	button1.disabled = false
	button1.style.display = "";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = false;
	button3.style.display = "";

	img.style.display = "none"

	button1.onclick = C2CeoOffice;
	button2.onclick = C1Entry;
	button3.onclick = C2SleepQuarters;
}

function C2SleepQuarters () {
	gamecontainer.style.backgroundImage = "url(images/sleeparea.jpg)";
	title.innerHTML = "chapter 2 The Sleep Quarters"
	description.innerHTML = "you are now in the sleeping quarters"
	button1.innerHTML = "The lab";
	button2.innerHTML = "Main hallway";
	button3.innerHTML = "go to sleep";

	button1.disabled = false
	button1.style.display = "";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = false;
	button3.style.display = "";

	img.style.display = "none"

	button1.onclick = C3TheLab;
	button2.onclick = C2TheBunker;
	button3.onclick = C2Sleep;
}

function C2CeoOffice () {
	gamecontainer.style.backgroundImage = "url(images/ceooffice.jpg)";
	title.innerHTML = "chapter 2 The Sleep Quarters"
	description.innerHTML = "you are now in the office area "
	button1.innerHTML = "ceo office";
	button2.innerHTML = "main hallway";
	button3.innerHTML = "";

	button1.disabled = false
	button1.style.display = "";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = true;
	button3.style.display = "none";

	img.style.display = "none"

	button1.onclick = C2CeoOfficeinside;
	button2.onclick = C2TheBunker;
	button3.onclick = C2SleepQuarters;
}

function C2CeoOfficeinside () {
	gamecontainer.style.backgroundImage = "url(images/ceoofficeinside.jpg)";
	title.innerHTML = "chapter 2 inside the ceo office"
	description.innerHTML = "you are in the ceo office "
	button1.innerHTML = "shut down the bunker";
	button2.innerHTML = "ceo office";
	button3.innerHTML = "";

	button1.disabled = true
	button1.style.display = "none";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = true;
	button3.style.display = "none";

	img.style.display = ""
	img.src = "images/ceoKey.png";
	img.style.margin = "180px 0px 0px 190px"
	img.style.display = ""
	img.onclick = getceokey;

	if (inventory.CEOKey === true) {
		img.style.display = "none"
	}

	if(inventory.code === true) {
			button1.disabled = false;
			button1.style.display = "";
		button1.onclick = C2ShutDown;
	}

	button1.onclick = C2ShutDown;
	button2.onclick = C2CeoOffice;
	button3.onclick = C2SleepQuarters;
}

function C2ShutDown () {
	gamecontainer.style.backgroundImage = "url(images/accesgranted.jpg)";
	title.innerHTML = "The Protector "
	description.innerHTML = "you put in the codes en shut down the facility leaving the terrible secret in the bunker away from the world"
	button1.innerHTML = "";
	button2.innerHTML = "restart";
	button3.innerHTML = "";

	button1.disabled = true
	button1.style.display = "none";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = true;
	button3.style.display = "none";

	img.style.display = "none"

	button1.onclick = C2CeoOffice;
	button2.onclick = C1Entry;
	button3.onclick = C2SleepQuarters;

	inventory.keycard = false;
	inventory.CEOKey = false;
	inventory.code = false;
}

function getceokey () {
	inventory.CEOKey = true;
	img.style.display = "none"
}

function C2Sleep () {
	gamecontainer.style.backgroundImage = "url(images/youdied.png)";
	title.innerHTML = "sleep"
	description.innerHTML = "you were tired so you were going to sleep but when you were sleeping you died"
	button1.innerHTML = "";
	button2.innerHTML = "";
	button3.innerHTML = "";

	button1.disabled = true
	button1.style.display = "none";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = true;
	button3.style.display = "none";

	img.style.display = "none"

	button1.onclick = C2CeoOffice;
	button2.onclick = C1Entry;
	button3.onclick = C2SleepQuarters;

	inventory.keycard = false;
	inventory.CEOKey = false;
	inventory.code = false;
}

function C3TheLab () {
	gamecontainer.style.backgroundImage = "url(images/lab.jpg)";
	title.innerHTML = "chapter 3 The Lab "
	description.innerHTML = "you are now in the lab"
	button1.innerHTML = "Control Room door";
	button2.innerHTML = "Sleep Quarters";
	button3.innerHTML = "test";

	button1.disabled = false
	button1.style.display = "";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = true;
	button3.style.display = "none";

	img.style.display = "none"

	button1.onclick = C3ControlRoomLocked;
	button2.onclick = C2SleepQuarters;
	button3.onclick = C2SleepQuarters;
}

function C3ControlRoomLocked () {
	gamecontainer.style.backgroundImage = "url(images/controlroomdoor.jpg)";
	title.innerHTML = "chapter 3 control room "
	description.innerHTML = "you find the control room but the door is locked and you need a keycard"
	button1.innerHTML = "open with keycard ";
	button2.innerHTML = "The Lab ";
	button3.innerHTML = "try open the door without a keycard";
		
	button1.disabled = true;
	button1.style.display = "none";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = false;
	button3.style.display = "";

	img.style.display = "none"

	button1.onclick = C3ControlRoom;
	button2.onclick = C3TheLab;
	button3.onclick = C1YouDied;

	if (inventory.CEOKey === true ) {
		button1.disabled = false
		button1.style.display = "";
	}
}

function C3ControlRoom () {
	gamecontainer.style.backgroundImage = "url(images/controlroom.jpeg)";
	title.innerHTML = "chapter 3 controlroom "
	description.innerHTML = "you are now in the contol room"
	button1.innerHTML = "take the documents and leave";
	button2.innerHTML = "Sleep Quarters";
	button3.innerHTML = "test";

	button1.disabled = false
	button1.style.display = "";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = true;
	button3.style.display = "none";

	img.src = "images/code.jpg";
	img.style.margin = "40px 0px 0px 860px"
	img.style.display = ""
	img.onclick = getcode;

	button1.onclick = C3missioncomplete;
	button2.onclick = C3ControlRoomLocked;
	button3.onclick = C2SleepQuarters;
}
function getcode () {
	inventory.code = true;
	img.style.display = "none"
}

function C3missioncomplete () {
	gamecontainer.style.backgroundImage = "url(images/missioncomplete.jpg)";
	title.innerHTML = "The mercenary"
	description.innerHTML = "you take the documents and leave the bunker"
	button1.innerHTML = "";
	button2.innerHTML = "";
	button3.innerHTML = "";

	button1.disabled = true
	button1.style.display = "none";
	button2.disabled = false;
	button2.style.display = "";
	button3.disabled = true;
	button3.style.display = "none";

	img.style.display = "none"

	button1.onclick = C2CeoOffice;
	button2.onclick = C1Entry;
	button3.onclick = C2SleepQuarters;

	inventory.keycard = false;
	inventory.CEOKey = false;
	inventory.code = false;

}