const bcrypt = require("bcrypt");

async function createHash() {

    console.log(await bcrypt.hash("123456", 10));

    console.log(await bcrypt.hash("password", 10));

}

createHash();