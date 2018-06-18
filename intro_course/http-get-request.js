const PROTOCOL = 'https';
const protocol_object = require(PROTOCOL)
const url = PROTOCOL + '://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'

var options = {
    hostname: 'gist.githubusercontent.com',
    method: 'GET',
    path: '/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'
};

const req = protocol_object.request(options, (response)=>
    {
        let raw_data = "";
        response.on('data', (chunk)=>
        {
            raw_data += chunk;
            console.log(chunk)
        })

        response.on('end', (chunk)=>
        {
          try {
              const parseData = JSON.parse(raw_data)
              console.log(parseData)
          }  catch (error) {
              console.error(error.message)
          }
        })
    }).on("error", (error)=>
        {
            console.log(error.message)
        })
        
req.end()