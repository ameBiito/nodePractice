import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt'; //fictional path to showcase methods 

// basename() -> returns last portion o a path 
console.log(path.basename(filePath));

// dirname() -> gives the file path 
console.log(path.dirname(filePath));

// extname() -> Returns extension name 
console.log(path.extname(filePath)); //.txt

// parse() -> Returns all the stuff previusly mentioned 
console.log(path.parse(filePath)); 

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

// join() -> Creates a file path based on arguments passed to it 
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');

// resolve() -> Pretty much the same thing as join()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
