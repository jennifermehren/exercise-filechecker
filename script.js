let userInput = document.getElementById("filename");
const buttonGetName = document.getElementById("button-filename");
let outputField = document.getElementById("output");
let outputType = document.getElementById("output-file-type");
let outputCategory = document.getElementById("output-file-category");
let filename;
let filetype = [];

// -------------- BUTTON FUNCTION ----------------
buttonGetName.addEventListener("click", (e) => {
  e.preventDefault();
  filename = userInput.value.split(".");
  filetype = filename.splice(1, 1);

  let category;

  if (filetype.includes("jpg")) {
    category = "Image";
  } else if (filetype.includes("jpeg")) {
    category = "Image";
  } else if (filetype.includes("bmp")) {
    category = "Image";
  } else if (filetype.includes("png")) {
    category = "Image";
  } else if (filetype.includes("wav")) {
    category = "Video";
  } else if (filetype.includes("mp3")) {
    category = "Video";
  } else if (filetype.includes("txt")) {
    category = "Text";
  } else {
    alert("Bitte gültiges Dateiformat eingeben :-)");
  }

  outputType.innerHTML = "Dateityp: ." + filetype;
  outputCategory.innerHTML = "Dateikategorie: " + category;

  console.clear();
  console.log(filename);
  console.log(filetype);
  console.log(category);
});
