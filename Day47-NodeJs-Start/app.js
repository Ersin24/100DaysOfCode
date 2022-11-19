// const userName = 'Maximilian';

// console.log(userName);

const http = require('http'); //Node Js'te yerleşik bir işlev. Parantez içindeki yazılı olan paket adı.

function handleRequest(request, response) {

    if (request.url === '/currentTime' ) {
        response.statusCode = 200;
        response.end('<h1>' + new Date().toISOString() + '</h1>');
    } else if (request.url === '/') {
        response.statusCode = 200;
        response.end('<h1>/ Component </h1>');
    }

    //Burası localhost:3000/ den sonraki pathi yakalıyor. Path isteklerini url ile sağlıyoruuz. 
}

const server = http.createServer(handleRequest); //addEventListener gibi yerleşik bir işlev. parantez kullanmıyoruz

server.listen(3000); //3000 portu seçmemezin nedeni diğer servislerle çatışmaması. Normalde 80 ya da 443 yapacağız gerçek sunucuda.

// node app.js ile çalıştırıp tarayıcıda localhost:3000 portuna gitmemiz gerek. Çıkmak için ctrl + c kullanabililriz.

// amozon.com => Send a request to Amozon's server
// amozon.com:80 (SSl:443 ama yine de 80 olabilir çünkü sifreleme yapıyor) ve direkt 443'e gönderiyor. Mesela amazon.com:100 yazarsak hata veriyor.

