import crypto from 'crypto';

// createHash() 
const hash = crypto.createHash('sha256');
hash.update('password1234'); //the thing we want to hash 
console.log(hash.digest('hex')); //get the file in the desired format 

//  randomBytes()-> Generate random cryptographically strong data
crypto.randomBytes(16, (err, buffer) => {
    if(err) throw err;
    console.log(buffer.toString('hex'));
});

// createCipheriv() && createDecipheriv-> Creates cipher text (processes readable data into unreadable data using keys)
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Secret message', 'uft8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);