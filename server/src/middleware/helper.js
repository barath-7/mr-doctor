const atob = require('atob');

const decodeClientId = (clientid) =>{
    let decodedClientId = atob(clientid) || '';
    return decodedClientId;
}


module.exports = {
    decodeClientId
}