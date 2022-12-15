1. Öncelikle kimlik doğrulama ile başlıyoruz. Nodejs ve mongodb kullanıyoruz. Terminali açıp `npm init -y` ile başlıyoruz. Sonra rotaları yönetmemiz için `npm instal express` kuruyoruz. Kodu yönetmek için geliştirme aşamasında `npm i --save-dev nodemon` kuruyoruz. Şimdi bunu ayarlamak içini package.json dosyasında "scripts" kısmında "start": "nodemon app.js" ile ayar yapıyoruz.  Ana klasörde app.js oluşturup başlıyoruz.

2. Models, views ve controllers klasörlerini oluşturuyoruz. Views klasörü altında admin, auth(kullanıcı girişleri), cart(alışveriş sepeti) ve products(ürünler) klasörü oluşturuyoruz. Ana klasörde routes ile yolları oluşturacağımız klasörü oluşturuyoruz. Kimlik doğrulamayla ilgili rotayı tutması için auth.routes.js dosyasını oluşturuyoruz. Bir uzantı değil sadece ismi. 

