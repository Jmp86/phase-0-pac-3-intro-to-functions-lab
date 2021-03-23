function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
logShout ('HELLO');

function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper ('hello');

const string = 'HELLO';

function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
        string = "I can\'t hear you!"
      } else if (string === string.toUpperCase()) {
        string  = "YES INDEED!"
      } else if (string === "I love you, Grandma.") {
        string  = "I love you, too."
      }
     return string;
}

console.log(sayHiToGrandma(string));



