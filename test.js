// import crypto from 'crypto';

// import crypto from 'crypto';

// Generate a secure random string of 32 bytes (256 bits)
const secret = crypto.getRandomValues(32).toString('hex');

console.log('Generated secret:', secret);
