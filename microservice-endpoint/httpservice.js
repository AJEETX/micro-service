const http=require('http')

const httpGet = url => {
    
    return new Promise((resolve, reject) => {
    
        http.get(url, res => {
    
            let body = ''; 
    
            res.on('data', chunk => body += chunk);
    
            res.on('end', () => resolve(body));
    
        }).on('error', reject);
    
    });
  };
  const httpPost = (url,data) => {
    
    var options = {
        host: url,
        port: 4001,
        path: '/',
        method: 'POST',
        headers: {
                  'Content-Type': 'application/json',
            }
        };
    return new Promise((resolve, reject) => {
     
        let dataEncoded = JSON.stringify(data);

        const request = http.request(options, (res) => {

            res.setEncoding('utf8');

            let data = '';
            res.on('error', reject);
            res.on('data', d => data +=d);
            res.on('end',() => res.statusCode === 200
                  ? resolve(data)
                  : reject('err')
            );
        })

        request.write(dataEncoded)
        request.end()
    });
  };
    
  module.exports={
      httpGet:httpGet,
      httpPost:httpPost
  };