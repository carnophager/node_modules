const http = require('http')
const post_data = JSON.stringify({user: "admin"})

console.log(Buffer.byteLength('½'))
const options = {
    hostname: 'mockbin.com',
    port: 80,
    path: '/request?user=admin&user=guest',
    method: "POST",
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Content-Length' : Buffer.byteLength(post_data)
    }
}

const req = http.request(options, (res) => {
    res.on('data', (chunk)=>{
        console.log(`BODY: ${chunk}`)  
    })

    res.on('end', ()=>{
        console.log("No more data in response.")    
    })
})

req.on('error', (e)=>{
    console.error(`problem with request: ${e.message}`)
})

req.write(post_data);
req.end();