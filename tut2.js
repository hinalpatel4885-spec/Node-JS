const fs=require("fs");
const text=fs.readFileSync("textfile.txt","utf-8");
console.log(text);
let text2=text.replace("this","that");
fs.writeFileSync("texttut.txt",text2);
console.log(text2);