const fs = require('fs');
// fs.readFile('myfile.txt', 'utf-8', (err, data) => {
//     console.log(err,data);
// })
// const a = fs.readFileSync('myfile.txt');
// console.log(a.toString());
// console.log("finished");

fs.writeFileSync('myfile2.txt',"this is myfile2 created", () => {
    console.log("file2 created");
})

    console.log("finished");