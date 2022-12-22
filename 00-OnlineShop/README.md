1. Öncelikle kimlik doğrulama ile başlıyoruz. Nodejs ve mongodb kullanıyoruz. Terminali açıp `npm init -y` ile başlıyoruz. Sonra rotaları yönetmemiz için `npm instal express` kuruyoruz. Kodu yönetmek için geliştirme aşamasında `npm i --save-dev nodemon` kuruyoruz. Şimdi bunu ayarlamak içini package.json dosyasında "scripts" kısmında "start": "nodemon app.js" ile ayar yapıyoruz.  Ana klasörde app.js oluşturup başlıyoruz.

2. Models, views ve controllers klasörlerini oluşturuyoruz. Views klasörü altında admin, auth(kullanıcı girişleri), cart(alışveriş sepeti) ve products(ürünler) klasörü oluşturuyoruz. Ana klasörde routes ile yolları oluşturacağımız klasörü oluşturuyoruz. Kimlik doğrulamayla ilgili rotayı tutması için auth.routes.js dosyasını oluşturuyoruz. Bir uzantı değil sadece ismi. 

3. Görünüm motoru için ejs kuruyoruz. `npm i ejs`. App.js üzerinde kullanmak için gerekli kodu yazdık. Views altında auth klasörünün içine login.ejs ve signup.ejs dosyalarını koyduk. Ejs te çalışırken incule görmüştük onu kullanacağız. ortak olan dosyalar için. views klaösrünü admin ve customer olarak ayırıyoruz şimdi. Includes klasörünü customer içersine attık. 

4. Public klasörünü style sayfaları ve script sayfaları için oluşturduk. Her dosyada bütün css dosyalarını çağırmıyourz çünkü bu aynı zamanda bize performans sorununu getirirdi.

5. Mongodb bağlantısı için **data** klasörünü oluşturduk ve `npm i mongodb`paketini kullanıyoruz.

6. `npm i bcryptjs` parolayı kriptolamak için kurduk

7. [npm tiny-csrf](https://www.npmjs.com/package/tiny-csrf) kursta ise `npm i csurf` kullanıyoruz. Gerçekte yukardaki adresi baz al.

8. `npm i express-session` ve `npm i connect-mongodb-session` ile oturum yönetmek için paketleri kuruyoruz. 

9. `db.users.updateOne({ _id: ObjectId("639f70b3494515a3171be200")}, { $set: {isAdmin: true} })` ile admini veritabınında flag ekliyoruz

10. `npm i --save multer` ile çoklu dosya gönderimini yapacağız. Dosyalara uniqe isim için ise `npm i uuid` paketi yüklüyoruz