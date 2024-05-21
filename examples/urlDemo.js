import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL Object -> Gives parameters from url (makes string become url object )
const urlObj = new URL(urlString);

console.log(urlObj);

// format() -> Takes url object and takes it back into a string

console.log(url.format(urlObj));

//import.meta.url  -> Provies meta data about current module (gives file URL)
console.log(import.meta.url);

// fileURLToPath() -> Gives path 
console.log(url.fileURLToPath(import.meta.url));

// URLSearchParams() -> Returns an object with a key, value for parameters 
const params = new URLSearchParams(urlObj.search);
params.append('limit', 5); //appends to the object 
params.delete('limit');
console.log(params);

