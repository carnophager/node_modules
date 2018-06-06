const fs = require("fs")
fs.writeFile('message.txt', 'Hello world',
function(error_message)
{
    if ( error_message )
    {
        return console.error(error_message);
    }
    console.log("Writing finished!");
});