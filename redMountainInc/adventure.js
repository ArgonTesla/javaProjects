window.onload = loadDocument;

function loadDocument() {
//This command adds the startGame to when the button is pushed.
	var buttonEL = document.getElementById("start");
	buttonEL.onclick = startGame;
}

//Start game when button is pushed.
function startGame() {
	console.log("You wake up feeling rather cold. It's dark, but there's enough light to see ten feet in front of you.");
	console.log("That is, if there were ten feet to see. You're not even looking at a wall, but a ceiling.");
	console.log("Slowly, you realize your situation is a little more dire than you previously thought.");
	console.log("This realization comes from the cool steel straps wrapped rather tightly around your wrists.");
	console.log("There's very little you can see while strapped to a table, but you can see a few things. Namely a HoloBoard with agents names and some reflective glass to your right.")
	console.log("This place is dilapidated. It's musty, and you still can't get over the chills in your bones.")
	console.log("You can hear a faint voice coming from the room behind the glass. Probably because it's cracked in multiple places.")
	console.log("It says")
	console.log("The procedure is complete, Dr. Myre. would you like to proceed to the final operation? If further explanation is needed, please say explain.")
	console.log("It doesn't sound human, likely a voice operated OS.")
	console.log("This could be good. You can loosen your legs for once. But what if this is something bigger?")
	var option
	runOp();
}

//Runs operation scene
function runOp() {
	do {
		option = prompt("You could proceed, cancel, or have it explain the operation. What will you do?")
		if(option != "proceed" && option != "cancel" && option != "explain") {
			runError();
		}
	} while(option != "proceed" && option != "cancel" && option != "explain")
		
	if(option == "proceed") {
		runProceed();
	} else {
		if(option == "cancel") {
			runCancel();
		} else {
			if(option == "explain") {
				runExplain();
			}
		}
	}
}

function runError() {
	console.log("Please say proceed, cancel, or explain. Other options such as Contact, and CrawlSpace value are unavailable as of (91 days, 14 hours, and 52 second) ago.")
	runOp();
}

//Provides explanation for operation
function runExplain() {
	console.log("To enhance physical and CrawlSpace capabilities, multiple neural injections have been conducted to the cranium and spinal cord.")
	console.log("The final step of the procedure consists of stabilization protocols and psychological evaluations along with an assessment of vital signs.")
	runOp();
}

//Continues story /Procedure/
function runProceed() {
	console.log("You're not sure what exactly will happen, but maybe if you're strapped down, there's a reason.")
	console.log("You feel yourself lowering, and eventually, after a few seconds, you finally reach the bottom.")
	console.log("It's been several minutes, and you feel like something should be happening, yet it's far too still.")
	console.log("Probably broken, like everything else.")
	console.log("The table lifts you to your feet, and releases the straps. You fall down face first. You were not ready.")
	console.log("The computer voice is back, this time through the speaker.")
	console.log("Due to an error in the hardware, your procedure has been postponed.")
	console.log("(computer shifts tone) Congratulations! You are the first subject to live through the conversion process! Please head down the hall to receive warm clothes and a succulent meal made by our finest chefs!")
	console.log("It would be nice to warm up a little. Too bad the chefs are most likely dead or long gone.")
	console.log("You head down the hallway. Your legs are much stronger now, maybe you regained your balance?")
	console.log("As you continue, you see a line of tiles that are slightly elevated. It's obviously a trigger.")
	console.log("You shouldn't step on the trap.")
	var option2
	do {
		option2 = prompt("Step on the obvious trap?")
		} while(option2 != "yes" && option2 != "no")
			
		if(option2 == "yes") {
			do {
				option2 = prompt("DONT STEP ON THE TRAP")
			} while(option2 != "no" && option2 != "yes")
				
			if(option2 == "no" || option2 == "yes") {
				runAvoidTrap();
			}
		} else {
			runAvoidTrap();
		}
}

function runAvoidTrap() {
	console.log("You have an overwhelming urge not to step on the trap.")
}

function runCancel() {
	do {
		option = prompt("Are you sure you would like to cancel the operation?")
	} while(option != "yes" && option != "no")
		
	if(option == "yes") {
		runNoOp();
	} else {
		if(option == "no") {
			runOp();
		}
	}
}

function runNoOp() {
	console.log("You're not good with confines, and luckily they can't restrain you any longer.")
	console.log("The clamps release. It feels good to be free once more.")
	console.log("You can barely stand, but you manage to lift yourself using some equipment as leverage.")
	console.log("You can walk (kind of) toward the glass or toward the HoloBoard. The fully metal door is completely sealed. It's up to you.")
	runExamine();
}

function runExamine() {
	do {
		option = prompt("Go to HoloBoard or Glass.")
	} while(option != "holoboard" && option != "glass")
		
	if(option == "holoboard") {
		runHoloboardExamine();
	} else {
		if(option == "glass") {
			runGlassRoom();
		}
	}
}

function runHoloboardExamine() {
	console.log("The HoloBoard has several names on it. Or aliases. Agent Arid, Agent Clear, Agent Chilled, Agent Light, etc.")
	console.log("You decide to stop at Agent Hot. Probably a good idea.")
	runExamine();
}

function runGlassRoom() {
	console.log("You look through the cracks in the glass. There are many instructions on the usage and maintenance of PAR, the resident AI.")
	console.log("One catches your eye. It's a list of different actions that PAR can perform. You see the command OpenDoorQuar.")
	console.log("It needs a password. Namely the doctors name, his favorite agent, and the AI name.")
	do {
		option2 = prompt("Password or Clear")
	} while(option2 != "myrehotpar" && option2 != "clear")
		
	if(option2 == "myrehotpar") {
		openLock();
	} else {
		if(option2 == "clear") {
			runExamine();
		}
	}
}