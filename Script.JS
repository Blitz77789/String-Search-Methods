var mainString = "A journey of a thousand miles begins with a single step.";

var results = 
"Index of 'journey': " + mainString.indexOf("journey") + "<br>" +
"Last index of 'step': " + mainString.lastIndexOf("step") + "<br>" +
"Includes 'thousand'? " + mainString.includes("thousand") + "<br>" + 
"Starts with 'A journey'?: " + mainString.startsWith("A journey") + "<br>" +
"Ends with 'single step.': " + mainString.endsWith("single step.") + "<br>" +
"Index of 'begins': " + mainString.search(/begins/) + "<br>" +
"All matches for 'a': " + mainString.match(/a/gi).join(", ") + "<br>" + 
"Replace 'step' with 'move': " + mainString.replace("step", "move");
document.getElementById("output").innerHTML = results; 
