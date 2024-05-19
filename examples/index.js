//const {generateRandomNumber, celciusToFarenheit} = require('./utils');  //commonJS modules
//
//console.log(generateRandomNumber());
//
//console.log(celciusToFarenheit(0));

//import { getPosts } from "./postController.js"; // normal import using ES modules 
import getPosts from "./postController.js"; // default import 
import { getPostsLength } from "./postController.js";

console.log(getPostsLength());