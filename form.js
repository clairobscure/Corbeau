
// Function that veryfies if the key is valid.
function verifyKey(crypt) {
  var keyForm = document.getElementById("key").value;
  console.log("The key you entered is: "+keyForm)
  // Verifies that the key is a number.
  if (isNaN(keyForm)) {
    alert("The key is not a number");
    return;
  }
   /* Make sure that the key is an integer
    and verifies that the key is between 0 and 25 */
    var key = Math.trunc(keyForm);
    if (key < 0 || key >= 26 ) {
      alert("The key is not between 0 and 25");
      console.log("Error! The Rounded key is not between 0 and 25.")
      return;
    }
    console.log("The Rounded key is: "+key)
    if (crypt) {
      console.log("The key that will be used to encrypt the text is: "+key)
    }
    else {
      key = (26 - key) % 26;
      console.log("The key that will be used to decrypt the text is: "+key)
    }
    console.log("The key is valid 👌 The program will proceed to encrypt/decrypt the text now.")
    /* We put our text in a var and we say that it's value is equal
    at this same text but put through the cesar function
    which is composed of 2 parameters*/
    var textForm = document.getElementById("textForm");
    textForm.value = cesar(textForm.value, key);
}

 // The function that will encrypt the text
 function cesar(text, key) {
   // We create a variable 'output' that will stock the encrypted text
   var output = "";
   // we create a for loop, to make sure it encrypts till the text is finished
   for (var i = 0; i < text.length; i++) {
     var c = text[i];
     // Get the unicode code of the letter
     var code = text.charCodeAt(i);
     // If the letter is in Uppercase, it will shift it accordingly
     if ((code >= 65) && (code <= 90)) {
       c = String.fromCharCode(((code - 65 + key) % 26) + 65);
     }
     // If the letter is in Lowercase, it will shift it accordingly
     else if ((code >= 97) && (code <= 122)) {
       c = String.fromCharCode(((code - 97 + key) % 26) + 97);
     }
     // If it's not a letter it will just copy it whithout shifting it
     else {
       c = text.charAt(i);
     }
     output +=c;

   }
   // Give use the crypted text
    console.log("Each letters has been replaced by the letter "+key+" positions away. Everything worked normaly")
    return output;
 }
