//import fs from 'fs';
import { writeFile } from 'fs';
import fs from 'fs/promises';

// Read file -callback version (asynchronous)
//readFile('./test.txt', 'utf8', (err, data) =>{
// if(err){
//     throw err;
// }
// console.log(data);
//

// readFileSync() - Synchrounous version 
//const data = fs.readFileSync('./test.txt', 'utf8');
//console.log(data);

// readile() - Promise version 
//fs.readFile('./test.txt', 'utf8')
//    .then((data) => console.log(`${data} (Promise version)`))
//    .catch((err) => console.log(err));

// readFile - async/await
const readFile = async () => {
    try{
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

// writeFile -async/await version (overwrites file contents)

const ert = async () => {
    try{
        await fs.writeFile('./writingTest.txt', "Hello, i'm writing to this newly created file");
        console.log("Done");
    } catch (error){
        console.log(error);
    }
}

// appendFile()
const appendFile = async () =>{
    try{
    await fs.appendFile('./test.txt', '\nThis is a new appended line');
    console.log("Done");
    } catch(err){
        console.log(err);
    }
}
appendFile();