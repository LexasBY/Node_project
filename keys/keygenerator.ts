import keypair from "keypair";

let pair = keypair()
let privateKey = pair.private;
let publicKey = pair.public;

export {privateKey, publicKey}