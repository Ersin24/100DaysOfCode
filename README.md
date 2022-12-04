# 100 Days Of Code

## Day 1
> index.html dosyası oluşturuldu

## Day 2
> Understanding HTML elements and Started with CSS

## Day 3
> Working with the Browser DEveloper Tools and Using Global CSS Styles

## Day 4
> [Google Fonts](https://fonts.google.com/)

## Day 5
> Sadece özel karakterler için ve okunabilirk için pre etiketlerini kullanabiliriz

> Organizing Soruce Files in Folders and Styling

## Day 6

> Yerelde görüntülemek için açtığımız url'deki adres tüm dünyada aynı olarak web geliştirme için ayrılmıştır. 127.0.0.1 yerine localhost yazarsak aynı web sitesi adı gibi bir isimle çağırmış oluruz. Go Live olarak da localhost:5500 yazarsak görürüz. 5500 kısmı port kısmıdır. Internete açtığımızda 80 ya da 443 portundan genelde açığa çıkar. örneğin hepsiburada.com:443 ya da 80 yazarsak yine aynı adrese çıkacaktır. 

## Day 7
> Box model : content - padding - border - margin

## Day 8

A List Of All CSS Selectors [Day 8]
Thus far, we already learned about a lot of key CSS selectors. Here's a list / summary of all the CSS selectors that you can use in CSS (including some, which we haven't seen yet):

> Tag type selector

CSS: p { ... }

Would select this HTML element for example: <p>Some text...</p>

This selector selects all HTML elements that are of this tag type

> ID selector

CSS: #some-id { ... }

Would select this HTML element for example: <h1 id="some-id">...</h1>

This selectors selects the element that has this ID on it (should only be once per page)

> Class selector

CSS: .some-class { ... }

Would select this HTML element for example: <h1 class="some-class">...</h1>

This selector selects all HTML elements that have this class on them

> Attribute selector (new)

CSS: [src] { ... }

Would select this HTML element for example: <img src="...">

This selector selects all elements that have this HTML attribute on them

> Universal selector (new)

CSS: * { ... }

Would select this HTML element for example: <p>....</p><img ...>

This selector selects ALL HTML elements (directly, not through inheritance but as if you would target them all individually)

> Grouping selector / selector list

CSS: p, .some-class { ... }

Would select this HTML element for example: <p>...</p><h2 class="some-class">...</h2>

This selector selects all elements that match the individual selectors in that list

> Combined selector

CSS: p.some-class { ... }

Would select this HTML element for example: <p class="some-class">...</p>

This selector selects all elements that meet both conditions (i.e. "<p>" elements with "some-class" class on it, in this example)

> Pseudo selector

CSS: a:hover { ... }

Would select this HTML element for example: <a>...</a> (when the user hovers over it)

This selector selects all elements that meet this "pseudo state" (i.e. all links that are hovered in this example)

> Inline elementlerde herhangi bir margin işlevini kabul etmez. Eğer padding verirsek taşma meydana gelir. Bunu display property ile çözebiliriz. Inline-block ile padding margin verebiliriz. Anchor tagının özelliklerini de taşır bu arada

## Day 9-10

> First project added

## Day 11

> Netlify drop üzerinden ücretsiz yayına aldık 

> Favicon generetors ile normal bir resmi favicona çevirdik ve link ile include ettik

> "/" Server'da bunu kullanacağız 

## Day 12

> Command Line Interface (CLI) vs Graphical User Interface (GUI) ayrımında bizim cli tarafında yazdığımızı öğrendik. Windows tarafındaki cmd ekranı. 

> **del** komutu siliyor 
>**mkdir** yeni klasör oluşturuyor
>**rmdir** klasör siliyor
> **git --version** ile git versiyonunu görebiliriz
> **git init** ile initial ediyoruz
> **git status** bize son andaki snapshot hakkında bilgi veriyor
> **git add ...** ile untracked durumdan tracked duruma çekiyoruz
> **git commit -m  *..."** -m olan commit messajı
> **git config --global --edit** diyerek name ve email kısımlarını değiştirebiliyoruz. Bunu yaptıktan sonra **:x** diyerek çıkabiliriz.
> **git config --global user.name "Ersin göç"** diyerek username değiştirebiliriz
> **git config --global user.name** bize username adını gösterir
> **git config --global user.email "ersin_1229@hotmail.com"** diyerek username değiştirebiliriz
> **git config --global user.email** diyerek email adını değiştirebiliriz
> **cls** ve **clear** command ekranını temizler
> **git log** log kayıtlarını görüyoruz
> **git add text1 text2 text3** diyerek çoklu **git add .** tek seferde yapabiliriz
> Buralarda git statusu çok kullanıyoruz çünkü neler yaptığımızı görmek için

## Day 13

> **git branch** hangi branchta olduğumuzu gösteriyor. Aynı zamanda git status ile de bunu görebiliyoruz. Default olarak **master** geliyor ve bizim bunu değiştirmemiz lazım. **git branch -m main** ile main adında branch açabiliriz.

> **git checkout -b feature** dersek feature adında yeni bir branch açıyoruz ve ona geçiyoruz. git branch dersek ya da status dersek görüyoruz yine

> **git add .** tüm yeni oluşumları ekler

> **git merge branchAdı** dersek bulunduğumuz branch ile yazdığımız branch adını birleştirir. commitleri ve eğer dosya varsa onları da birleştirir getirir. Bunu tek seferde yapıp bitirmiyoruz. Örneğin feature branch'tayken yeni commit yaptık sonra main branchına geçip feature branchını merge ettik diyelim. Bundan sonra tekrar feeature konumuna gidersek tekrar yeni bir şey eklersek otomatik olarak bunu main branchı ÇEKMEZ! Biz yine merge etmemiz gerek dosyalar ve commitler için

## Deleting

> **git rm dosyaAdi** ile aynı dizinde bulunmak şartıyla bir dosyayı silebiliriz. 

> **git reset --hard HEAD~1** son yapılan değişkliği geri alır. Eğer 1 yerine 2 yazarsak son yapılan 2 değişikliği geri alır. Ayrıca bunu yapmak için git add ve git commit yapılması gerekir. Aksi halde en son ne zaman yapıldıysa ta oraya kadar gidecektir. 

> **git branch -D feautre** feature(özellik) isimli branchı siler.

> **git checkout -- .** Bu eğer bir değişiklik yaptık ve bunu commit etmemiş haldeyken geri almak istersek (ctrl + z gibi) kullanıyoruz.

> **git reset README.md** ==> yeni bir şeyler ekedik ve bunu git add yaptık. Ama sonrasında geri almak istiyoruz. Hangi dosyadaysak o dosyanın adını yazarak git add olmadan önceki haline döndürüyoruz. Hatta bunun üstüne **git checkout -- .** yaparsak en son commit edilmiş yapıya da geri döneriz.

## Day 14

> **git clone --urladres-- .** Bulunduğumuz dizine kopyalıyoruz projeyi

> [git-scm](https://git-scm.com) veya [github](https://github.com)  bu araçlar hakkında daha fazla bilgi edinmek için bakabiliriz.

## Day 15

> **display: flex** ile bir parent olan elementte flex yapısını oluşturuyoruz
> **flex-direction**  ile hangi yönde olması gerektiğini söylüyoruz. column -> aşağı doğru row -> soldan sağa doğru bir eksen.
> **flex-wrap**  -> genişlik verilmediğinde geçerli. Elementler ekran küçüldüğünde sarmalansın mı yoksa sarmalanmasın mı yapısı. wrap -> sarmala nowrap -> sarmalama
> **align-items** -> dikeyde nasıl davranacağı
> **justify-content** -> yatayda nasıl davranacağı

## Day 16

> **background-image**

> **background-size** - cover

> **background-position** - center

> **margin: 0 auto** width verilmişse ortalar

> Bir elemanı sağa sola üste alta taşıma istiyorsak block bir element içindeki blok elemente **position: relative;** vermeliyiz. Örneğin artık **top: 20px;** dediğimizde üstten 20px ittirildiğini göreceğiz.

> **Position: absolute** verdiğimizde ise elemenın inline element gibi davrandığını görürüz ve sonraki gelen eleman bunu yokmuş gibi yanına konumlandırarak davranır.

## Day 17 (Önemli noktalar var)

> Position absolut dediğimizde html tagına göre konumlandırma yapıyor kendisini. Bunu width 100% ile destekliyoruz ve sonrasında çıkacak hatayı da box-sizing border box ile çözüyoruz. Tam oturması için **top: 0; left: 0;** da veriyoruz

> **box-sizing: border-box;** yapısını gördük. 

> **object-fit: cover;** ile resimdeki genişliği komple sağlıyoruz

## Day 18

> childtaki margin hatasını parent'a padding vererek çözdük

> **background: lineer-gradient(..deg, rgb(), rgb())** arka planı geçişli yaptık. 0, 45, 90, 135, 180 gibi 45'lik özel kodlar verebiliriz

> Override olayını tekrar **position: static;** ile çözdük

## Day 20

> Izgara yapısını oluşturmak için öncelikle **display: grid;** veriyoruz

> Ardından sütunda ayrılması için **grid-template-columns: 1fr 1fr;** gibi ölçüm yapıyoruz

> Ardından gridler arasındaki boşluğu oluşturmak için **gap: 20px 20px** gibi değer veriyoruz

> Özel olarak grid almış olan bir li etiketini düzeltmek için 
**li:nth-of-type(3) {  grid-column: 1 / span 2; }** yapısını kullanıyoruz

> [Unicode Carakter Seti](https://en.wikipedia.org/wiki/Arrows_(Unicode_block)) 

> [Position Property](https://academind.com/tutorials/the-position-property/) 

> [Flexbox container](https://academind.com/tutorials/flexbox-basics-container/) 

> [Flexbox item](https://academind.com/tutorials/flexbox-flex-items/) 

> [Comparing Flexbox and the Grid](https://academind.com/tutorials/css-grid-vs-flexbox/) 


## Day 21

> Artık html etiketlerinde *article* da kullanıyoruz

> Pixel ölçeklenebilir değil. % em ve rem kullanabiliriz.

## Day 22

> % verdiğimizde örneğin parent eleman 40px ise ve child elemanda %200 vermiş ise font size 'a bize dönecek değer 80px olur. Eğer vermez isek default olan değer tarayıcının değerine göre ölçeklenir. Tarayıcının değerini görmek için ise En sağda 3 noktadan ayarlar sonrasında Görünüm (view) buradaki yazı tipi boyutu 16px e göre şekil alır. Değiştiğini görmek için burada oynamalar yapabiliriz

> **em** de yüzde gibi relative behaves for the parent element. font-size a göre şekillenir.

> **rem** ise asıl kullanacağımız property. Buna göre **rem** root elemente göre behaves. Browser settings ' e göre always relative behaves. When html element font-size give the for example 24px. Roota göre şekillenir. 16px ' e göre şekillenir

## Day 23

### *Desktop First* vs *Mobile First* 

> Desktop max-width with started. Geriye doğru gider. Mobile first mind-width ile başlar maximuma kadar gider.

> smartphone - 480px, tablet - 768px, notebook - 1024px, desktop computer 1200px, tv - >1200px

## Day 24

***3 şeyi hatırla***

1. Adım adım farklı özellikler ekleyin
2. Aktarılması gereken temel bilgiler hakkında düşünün
3. Web sitenizi aşırı şekillendirmeyin

***Boyutlandırma***

> Örnek olarak [stripe com](https://www.stripe.com)

> Merkezi genelde ortala sağdan soldan boşluklar bırak bütün alanı kullanma.

> cardDeailts projesinde başlık için serif diğer yazı tipleri için sans serif yazı tipini kullandık. ayrıca button price için ayrı bir yazı ağırlığı mevcut

> Gri tonu her zaman kullanacağız ve her zaman sayfalar için gereklidir. Örneğin h1 kullanırken bile color kullanacağız ve saf siyah yerine biraz daha gri tonu kullanacağız böylelikle daha profesyonel görüntüye geçmiş oluyor. Ayrıca bir tane ana renk seçeceğiz.

## Day 25 (Öneriler devamı)

> Font size, font weight, color çok önemli. Örneğin html etiketinin backgroundunu çok açık gri tonlarında kullanırken vurgulayacağız metindeki yerleri daha koyu tonda uyguluyoruz ve font size ve font weight verebiliyoruz. 

> Html elementinin içerisinde css değişkenlerini yazıyoruz. Örneğin *--color-gray-100: rgb(233,233,2330)* dediğimizde sonrasında bu rengi çağırmak için **var(--color-gray-100)** dememiz gerekiyor. Aynı şekilde font size 'ı da böyle değişkene aktarabiliriz.

> **html**, **:root** ve  * etiketlerine baktık

> **transformation** - Elementin görünümünü değiştirmek veya taşımak. Ör. üzerine geldiğinde hover efekti. Örneğin **transform: scale(2)** dediğimizde 2 kat büyüklüğüne çıkacak ya da **transform: rotate(180deg)** dediğimizde ters dönecektir.

> **transition** - Başlangı. durumundan bir başka duruma yumuşak geçiş yapımı. **transition: transform 0.5s ease-out 2s** dediğimizde başka yerde hover da transform verdiğimizde bu çalışacaktır. Sondaki gecikme ortadaki süresi

> [Svg Dökümantasyon](https://www.heroicons.dev) ile svg ücretsiz güzel dosyaları görebiliyoruz. Bunu kullanabiliriz.

## Day 26

> Formlar: **contact form**, **checkout form**, **login form** ve **comment form** için önemli yere sahipler

> **input type** ile (text, number, email), **textarea** ile multi-line text input field, **select** dropdown multiple-choice or multi-select input, **button** reset ya da submit yaptığımız form.

> **POST** istekleri gönderilen tüm veriler talebin kendisinin bir parçası olacaktır. **GET** ise amaç veri göndermek değildir. Ayrıca url ye eklenir.  Ayrıca server'a gönderirken name değerini eklemeyi unutmuyoruz.

## Day 27

> **label** etiketi ve *for* attribute bakıldı. Bunun için inputa id verildi

> *buttonlara* ve *inputlara* özel font family verilmesi gerek yoksa default değeri çekiyor. Buttona gelip **font: inherit** dersek bütün yukardan gelen değerleri çeker. Eğer body'e bir şey veriyorsak body'den çeker.

> *input:focus* öğrendik. *label* *text* *password* *date* *email* *radio*

## Day 28

> *checkbox* yapıyorsak yine name ve value değerlerini giriyoruz. Eğer value vermezsek işaretlenirse get üzerinden gönderince **on** değerini gönderir.

> **textarea** ile inputa verdiğimiz tüm style'ı yeniden veriyoruz. Kapatma tagı var. 

> **select** ile sarmalayıp **option** ile seçenekleri yaptığımız dropdown menu yaptık

> Formu semantiğe çevirdik header main section ile.

> Validation olarak **required** **min** **max** **minlength** **maxlength** parametrelerini gördük. Buna göre tarihte de min ve max verebiliriz. Format 2010-01-10 şeklinde olmalı!

> Textareada kullanmak üzere **rows="8"** gibi değer yaptık ve **placeholder** **value** gibi değerleri gördük. Textarea için **resize: none;** değerini de koyuyoruz

## Day 29

> Challange tamamlandı

> JS' ye giriş yapıldıi

# JS

> Js ile canlı olarak veri alış verişi yapabiliriz borsa gibi.

> Arka tarafa bir zamanlayıcı atabiliriiz. (internet bankacılığında 5 dakikadan sonra bizi attığı gibi)

> Hata mesajları , kullanıcı doğrulamaları yapabiliriz.

> Syntax programalama dilinde dilbilgisidir.

> Js ile genelde bir şeyleri manipule etmeye çalışırız

> String ve number değişkenlerine baktık. Değişkenler aslında bir kutudur. Diyelimki bir vergiye ait numaramız var 32 (value) diye. Biz bunu container dediğimiz kutularda yıllarca saklayıp geri çekebiliriz.

## Day30

> Tek tırnak kullanacağız. Tek tırnak içinde yine tek tırnak kullanmak istersek **\** işareti kullanacağız.

> **Alert** , **string**, **number**, **array**, **object**

> Değişkenler: veri kapsayıcıları olarak tanımlayabiliriz. Değişkenler birer anahtar kelimedir. Biz **let** değişkenini kullanıyoruz. Bu sayede yeni bir değişken oluşturduğumuzu tarayıcıya aktarıyoruz. Js tam da bu.

> Değişken isimlerinde camelCase kullanıyoruz ve depoladığımız değişkeni tanımlamalı bu isim

> Tüm js kodu yukarıdan aşağı , soldan sağa doğru yürütülür ve her zaman böyle çalışır.

> Her kodun sonuna mutlaka noktalı virgül koyalım

> Html dosyasını şişirmemek için js kodunu da css kodu gibi dışardan çekiyoruz

> Çoklu verileri saklamak için **array** yapısını kullanıyoruz. Çok fazla veri ve değişken koyabiliriz. İndex 0'dan başlar

> Örneğin pasaportu ele alalım. Burada pasaportta isim yaş ülke cinsiyet gibi çok farklı kalemler tek kişiye ait. Burada bizim ihtiyacımızı karşılayan şey **object**.
Label ve value etkileşimi söz konusu. Aralarında mantıksal bağlantı varsa bunları gruplaştırabilir yani nesne oluşturabiliriz. 


## Day31

> Stringleri bölmek için araya *+* koyabiliriz çok uzunsa. Ya da daha kısa yöntemi backtickler ile yapabiliriz. 

> Amacımız her zamankod okunurluğudur.

> **functions**. Eğer belirli bir işlem yaptığımız kodumuz varsa ve bunu farklı yerlerde tekrar tekrar çağırıyorsak fonksiyonları kullanmamız gerekir. İsim verilirken işlemin ne yaptığı ile alakalı bir isim vermek gerekir. Fonksiyonu tanımladığımızda tarayıcı kendi özel komutumuzu öğrenecek ama bunu henüz yürütmeyecektir. Tarayıcıya ne zaman yürüteceğimizi söylememiz gerek 

> Js tarafından tanımlanan hatalar tarayıcıda consoleda gözüküyor. 

> Fonksiyonun içinde let gibi tanımlama yaparsak orada kullanılır o değişken. O yüzden dışarda tanımlama yapıyoruz. Eğer hem dışarda tanımlama yapıp hem de fonksiyon içinde let tanımlama yaparsak aynı isimle buna **variable shadowing** (değişken gölgeleme) denir. Js buna izin veriyor. Fonksiyon içinde aynı adla yeni bir değişken yaratıyor. 

> Fonksiyonun içinde dışardan gelen değişkeni tutmak yerine artık **return** anahtar kelimesini kullanıyoruz. Artık bu ifade ile her yerden erişebilip farklı işlemlerde de kullanarak esneklik sağlıyoruz. 

> Fonksiyonları daha esnek hale getirmek için parametre göndermeye başladık.

## Day 32

> Nesneler içinde nesneler olabilir.

> Nesneler içinde kullandığımız name, price gibi değerler bize **property** olduğunu gösterir. Eğer biz nesne içinde bir fonksiyon tanımlarsak bu **method** olacaktır. Fonksiyon tanımlamasında **function** keywordu yazılmaz!! tıpkı değerleri yazarken başına **let** koymadığımız gibi.

> **console.log** a geçtik alert bıraktık.
> **void** hiçbir şey döndürmez. (console.log üzerine glediğimizde void yazıyor)

> Matematik işlemlerini gördük. * / + - %

> **Integer** ve ondalıklı olan sayı **floats** gördük.

> number++ number-- gibi değerleri gördük

> Stringleri birleştirdik + operatoru ile

> Stringlerde kullanabileceğimiz **string.length** ile stringin tüm karakterlerini bulabiliyoruz. Bir obje değil ama js arkaplanda bunlar yazılmış. aynı zamanda **string.toUpperCase()** de kullanabiliriz


## Day 33

> Array'ler de strignler gibi **length** özelliği alıyorlar. Aslında stringlerin array gibi davrandığını söylemek mümkün.

## DOM

> **windows** global nesnesiyle ulaşıyoruz. konsola yazdırdığımızda tüm özellikleri görebiliriz. Buradaki alerti daha önce görmüştük hatta. 

> Document object model. Html etiketleri js ' ye dönüştürülebildiğinden tarayacıda dom ile etkileşime girebiliyor. **document** objesi ile bunları gerçekleştireceğiz. 

> console.log(document) yazınca ve üstüne gelince konsolda bize tüm html etiketini gösteriyor. Document sayfayı temsil ediyor. 

> console.log yerine **console.dir(document)** kullanınca asıl js verilerine bakabiliyoruz.  Burada **meta -> head -> children** ile head de ekli olan verileri görebiliyoruz. yine aynı şekilde **meta -> body -> children** ile de body'deki elemanları görebiliyoruz.

> !!! **Html kodundan önce js kodunu head tarafında yazarsak script tagına *defer* eklememiz gerek!!!** Bu bize kodun ertelenmesi gerektiğini söylüyor. 

## Day 34

> Consol'da yazcağız artık. Auto complete daha güzel de çalışıyor burda. 

> **getElementById** yapısını kullanacağız ve ayrıca bunları hep bir değişkende saklayacağız sonradan kullanmak için

> **querySelectorAll** ya da **querySelector(eşleşen ilk öğe)** ile dom'a erişmeyi öğrendik. 

> !!! **console.dir ile dom'a ulaş**

> Metin içeriğini **textContent** ile a tagının href özelliğini de **href** ile değiştirdik.

### Create Element DOM

> Bir zamanlayıcı sonrası yeni bir eleman eklemek isteyebiliriz. Bu olaylarda yeni bir senerya oluşturuyoruz. **createElement()** ile oluşturuyoruz. **append** ile içine atama yapıyoruz.

## Day 35

### Delete Element DOM

> Öncelikle elemanı seçeceğiz sonrasında **remove** ile sileceğiz. Eski tarayıcılarda kullanmak için ise **eleman.parentElement.removeChild(eleman)** dememiz gerekiyor.

### Elemanları hareket ettirme

> Var olan elemana parentelement üzerinden append edeceğiz. 


> **innerHTML** özelliğini gördük. Daha öncesinde **textContent** ile içeriğe erişmiştik. Arasındaki temel fark textContent sadece düz metin olarak içeriği alır. Bunu consol'a yazdığımızda görüyoruz. innerHTML ise içeriğindeki metin ve varsa html etiketi hepsini hesap ederek alır. Html etikeni de kullanabiliriz. textContent'te düz metin  olarak gösterir etiketleri.

> Olayları dinlemek için **addEventListener** ile çalışacağız. Öncelikle içeriğe erişeceğiz yine. İki parametre alıyor. İlki mesela *click* ikincisi bizim eriştiğimiz değişkenle alakalı yazdığımız fonksiyon olacak. Burada fonksiyonu açma kapama parantezleri yazmayacağız. Bu her işlev oluştuğunda çalışacak. 

> inputlarda tuş olayı için *input* ile yapacağız. Fonksiyon için de *value* özelliğini kullanacağız. Parametre geçtiğimizde ve bu parametreyi konsola yazdırdığımızda propertyleri görebiliyoruz. Burdan da **even.target.value** ile veriyi çekiyoruz. **Event.data** ile de tek tek verilerin girişinie bakabiliyoruz.

## Day 36

### const
> Değişkenler yer tutucu kaplardı. Değişkene saklanan değerleri sonradan değiştirebilirdik.**Sabit değişkenler(constants)** sabit değişkenlerdir. *const* ile tanımlanır. Let anahtar sözcüğünün alternatifidir. Asla yeni bir değerle değiştirilemez. Mesela kullanıcı adını asla değişltrimek istemeyebiliriz.Kod güvenliği sağlayabilir. İstenmeyen hataları önleyebilir. Asla değişmeyeceğinden emin olmak gerekir.

### style

> Jsdeki style tanımlamaları camel case kuralına göre yazılmış. **spanElement.className = 'warning'** dersek burada elemanın classı direkt warning olur. Eğer eski class varsa üstüne yazar. Biz bunun yerine **spanElement.classList.add('warning')** dersek üstüne yazacaktır. Kaldırmak istersek **remove** diyeceğiz.

## Day 37 - Advanced JS - Control Structure
### IF
> İki yapımız mevcut. 1.cisi **if** 2. ise **loop**. Buna göre şekillendireceğiz. 

> **if () {}** if değerlerinin arasında boolen bir değer olur true or false. Yes mi No mu şeklinde. Direkt true ya da false değerleri verebiliriz her zmana yürütür bunu. 

> If yapılarını karşılaştırma ya da mantıksal operatorler ile birlikte kullanacağız. **Karşılaştırma Operatorleri** *==, ===* eşitlik operatoru,  *>, <, >=, <=* , *!, !=, !==*. **Mantıksal Operatorler** ise *&&* and ve *||* or yapılarıdır. & operatoru |operatorunden onceliklidir. If koşullarında her zaman ilk baştan yukarıdan aşağı doğru başlar ilerler.

> Boolen değerleri saklayacağımız veri yapılarını öğrendik. Örneğin **let isLoggedIn = true** yapısı. Kullanıcı girişi yoksa *!isLoggedIn* ile yapıyı sağlıyoruz. Ya da bir kullanıcı adı varsa da aynı şekilde çalışır eğer boşsa false döndürür. **let enteredUserName='';** ise 0 yani burası false döndürecektir.  Boş bir karakter bile true döndürür. Yani boş veya 

### Döngüler

> for , for .. of arrayler ile kullanılır. for .. in object içinde döner. Boole değereri ile çalışırsak while döngüsü kullanacağız. for .. of ve for .. in sıkkça kullanılıyor. 

> **for (let i =0; i > 10; i++) {}** if gibi yazılışı var. içerisine let ile başlıyoruz. Mesela çevrimiçi bir oyunda bu kod işimize rastgele bir sayı üretmede lazım olabilir.

> Örneğin kullanıcılara mail gönderreceğiz diziden. Bunu for of ile yapacağız. **for (const user of users) {  }** burada user ile yeni değişken oluşturmuş oluyoruz. Aynı zamanda eskiye uyarlı yazmak istiyorsak **for (let i = 0; i < someArray.length; i++){console.log(someArray[i]);}** yazmamız gerekecek.

> *for in* => **for (const user in users) {console.log(users[user])}** ile verileri çağırabiliriz.

> Sabit bir sayıda veri varsa for döngüsü kullanıyoruz. Şimdi **while** ile sadece bir şartımız var. **while (!isFinished) {isFinished = confirm('Do you want to quit?')}** ile isFinished = true diyerek bir koşul yapabiliriz. Burası bitmeden diğer satırlara geçmez. 

## Day 39 - Loop ile yapılan örnekler

> Bir inputun değerini direkt input.value ile alabiliriz.

> querysSelectorAll bize bir dizi döndürür. Biz bu sayede **for of** döngüsünü kulanabiliririz. 

## Day 42 - Milestone Project

> formData verisi çok önemli çok kullancaz new operatoru ile.

## Day 45 - 3. Parti Paketleri

> **Bootstrap**, **Material UI**, **Tailwind CSS** sayesinde corousel scroolspy ve parallax effect gibi şeylere ulaşabiliriz. Daha az kod yazarız ama bunlar üzerinde daha az kontroloe sahibiz. Hataya daha az açık. Genelde daha büyük projelerde kullanıyoruz. 

> Bootstrap eklerken js dosyasını **defer** ile yine erteleme özelliğini kullanabiliriz. **fixed-top** classı ile navbarı üste sabitledik. 

> **Parallax** efekti için google aramalarına baktık. [simplePARALLAX.js](https://www.simpleparallax.com/) adresinden ulaşıyoruz evraklara. Burada cdn i kopyala yapıştır yapıyoruz. Yine defer özelliği ekliyoruz projeye cdn yüklerken. 

# Backende Doğru

## Day 46 

> Normalde tarayıcı üzerinde kodlarımız çalışırken artık server üzerinde kodlar yazacağız. Python, PHP, Java C# gibi diller olmasına rağmen şu en populer ***Node.js***. Yeni bir dil öğrenmemize gerek yoktur.

## Day 47 - Node JS

> [Node js Current](https://nodejs.org/en/) Current olanı yani en son güncel halini indiriyoruz. Diğeri LTS ise eski kararlı sürümü. Bununla js  kodlarını kullanmaya başlayabiliriz artık. Node js kodu yürüten araçtıkr. [Node dükamanlar](https://nodejs.org/api/) 'a ulaşabiliriz burdan. 

> Burada DOM yok. Js var. Bazı farklılıklar olacakır. Const ve let yine kullanabiliriz. Bunu ilkel olarak MacOs ta terminal yazarak bulacağız. Windowsta ise cmd yazarak bulabiliriz. Zahmetli diye vsc'da yazacağız. Burada ise **aynı dizinde olmak şartıyla** kodumuza **node app.js** ile ulaşıp çalıştırabiliyoruz. **[Cmd başlangç yardım ekranı](https://www.makeuseof.com/tag/a-beginners-guide-to-the-windows-command-line/)**

> Daha önceden serverda *netlify* ve *live-server* olarak çalışmalar yaptık aslında. Şimdi netlify gibi biz yapacağız. Bize http istekleri almak için doc sayfasında http kısmına bakabiliriz. 

# EXPRESS JS

## Day 48 - Express JS Started

> Node js sayesinde 3. parti paketlerini kullanacağız. Yani express.js i. Yine vcs terminalinde olacağız. Öncelikle **npm init** yazacağız. Varsayılan için enter a basacağız genelinde. Bize sonunda bir **JSON** sunar. Json temelde standart bir metin dosyasıdır. Ancak belirli biçimlendirme kurallarına ve JS nesnesine benzeyen bir yapısı vardır. 

> Esas olarak yönlendirme istekleriyle ilgilidir. Dosyalara yazabileceğimiz ve okuyabiliceğimizi öğrendik. Manuel olarak kontrol etmiyoruz httpleri artık. Ayrıca nodemone ile işimizi kolaylaştırdık.

> **npm install express** ile kurulumu yapacağız dosyamıza. Node js i arka planda bağlamamızı sağlayacak. Expressin de ihtiyaç duyduğu tüm paketler yüklenecektir. Aynı zamanda package.json dosyasında da bağımlıklıklar girişinde dosyamız eklenmiş olacaktır. node modules silsek bile sonradan npm i ile bunu geri yükleyebiliriz.

## Day 49

> **JSON** dosyası metin verilerini daha okunabilir yapılması için geliştirilmiş formattır. Bu bir js kodu değil normal metindir aslında standartlaştırılmış. Alternatif olarak *xml* de kullanılıyor. Jsonda mutlaka çift tırnak olarak kullanılmalı jsden farklı olarak. ve aynı zamanda key kısımları da tırnaklar arasında yazılmalı ama js'de böyle bir şey söz konusu değil. 

> Node ile artık Form verilerini alıp bir dosyaya kaydedebiliyoruz. 

### Nodemon

> Sürekli manuel olarak yeniden başlatmak yerine ekstra bir paket ekliyoruz. Kod otomatik olarak takip ediyor değişiklikleri. **npm install nodemon --save-dev** ile kurulumu yapacağız. Herhangi bir işlevsellik sunmuyor bize. Değişiklikleri kaydetmeden ilerlememizi sağlayacak. Package.json dosyasında scripts testten sonra virgül koyarak **"start": "nodemon app.js"** yazıp kaydedeceğiz. Şimdi **npm start** ya da **npm run start** diyerek başlatacağız. Şimdi nodemon tarafından destekleniyor ve sürekli kaydedip yeniden bailatmaya gerek yok. 


## EXPRESS PROJESI -- Çok önemli!!!!

> Yolları bulmak için *views* adı altında klasör oluşturuyoruz. Html sayfalarını oraya aktarıyoruz. Dosyaları göndermek için *res.sendFile* gönderiyoruz artık. 

> Statik dosyaları saklamak için **app.use(express.static('public'))** ile public klasör açıyoruz ve stil script dosyaları içine atıyoruz. 

> Şablon oluşturma motoru **npm i jsc** . Dinamik bir yapı için **<%= numberOfRestaurants %>** veri yapısını kullanıyoruz. Render ederken 2. parametre olarak değişkeni {} arasına yazıp : koyup değere eşitliyoruz. Bu dosya sunucuda ayrıştırılır ve işlenir. Dinamik bir yapıya sahibiz artık. Veriyi çekeren **<%= %>** ile verileri alabiliriz. Ayrıca **<% %>** arasına for if gibi kodları yazabiliriz. yazabiliriz. Buralarda input içerisine html kodu yazılsa dahi ejs güvenli şekilde ayrıştıracaktır. 

> include ile parçalara ayıracağız. **<%- %>** yapısı bize yardımcı olacak. 

> EJS IDE excentions indirdik artık daha rahat biçimlendirme yapacağız. Kodu manuel olarak biçimlendircek prettier kullanmayacağız. 

> Dinamik route girişi yaptık. app.get("/restaurants/:id", function (req, res) { const restaurantId = req.params.id; //param özelliği ile alıyoruz res.render("restaurant-detail", { rid: restaurantId }); }); //Dinamik Route yapısını kullanacağız.

> **npm install uuid** İle uniq id için bağımlıklık yüklüyoruz. 

> [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) ..

> Tüm backend kullanacağımız parçaları *util* klasörde topluyoruz. 

## Day 54 - Gelişmiş Javascirpt Kavramlarının Açıklanması

> Try catch yapılarını gördük. Tüm sayfayı hata varmış gibi göstermek yerine hata olabilecek yerlere try cath ile yakalıyoruz. Her şeyi try catch bloguna yazmıyoruz ama. Daha çok geliştirme aşamasında bunları yapıyoruz.

> Scoping(Kapsam belirleme): Değişkenlerin ve sabitlerin ve fonksiyonların sadece belirli yerlerde kullanılması durumudur. Sadece tanımladımığımz yerde mevcuttur. 

> new Date() gibi class sınıflarını gördük. Bunu çağırırken de new ClassAdı olarak çağırcağız. This oluşturalacak nesneyi ifade eder. 

> Asenkronda kodun okunup bitmesini beklemez. Başlar ve devam eder. örneğin dosya okuma işleminde olduğu gibi. Bir dosya okumak, vertitabanı işlemleri, http istekleri her zaman zaman alan uygulamardır. 

## Day 57 - Onwards To Databases

> Sürekli dosyaya veri yazma işlemleri (CRUD) sistemi yoracağı için daha optimal seçenek olan database ile işlemlerimizi yapmamız gerek. İki tür veri tabanı var. 1. SQL(ilişkisel veri tabanı) 2. NoSQL (İlişkisel olmayan veri tabanı).

> Sql: İç içe geçmiş veri türü yok. Açıkça tanımlanmış şemalara sahibiz. Her şema için bir masamız var yani. Bu da sorgulama yapmamızı kolaşlaştırıyor.

> NoSql: Çok sayıda tablo ile çalışmak yerine bir kaç tablo ile çalışır. Verileri örneğin JSON ile saklıyoruz. Tek bir sorgu ile tüm verileri çekebiliyoruz. Daha az karmaşık ama veri boyutu daha büyük. Satırlar ve sütunlar mantığı yoktur. Bir tabloda saklanan veriler vardır.

> İkisinin de kullanıldığı web siteleri de var. Çok büyük ölçekli web sitelerinde veri saklamak için daha çok NoSql kullanlıyour. 

# SQL

> MySql en popüeri kullanmak için . PostgreSql de ücretsiz.Microsoft Sql ücretli.

> [MySql Installer](https://dev.mysql.com/downloads/installer/) ile indirip kurulumu yapacağız. (Düşük parti indiriyoruz. )

> **CREATE DATABASE `database_adi`** ile database oluşturabiliriz. Büyük harf kullanmak gelenektir.

## Day 58 - SQL

> Table oluştururken yine küçük harflerle yazıyoruz. Birden fazla kelimede alt çizgi kullanacağız.  

> INT - sayılar için, VARCHAR() - kısa isim veya adresler gibi, DECIMAL - ondalık basamaklar fiyatlar gibi, DATETIME tarih ve saat, DATE zaman olmadan tarih, FLOAT, BOOLEAN doğru yanlış. id'leri INT ile saklıyoruz. PK işaretliyoruz primary key (1incil anahtar), NN boş olamayacağı anlamına gelir, AI her kayıt eklendiğinde id yi kendi başımıza ayarlamamız gerekmez.

> name adı versek VARCHAR(255) maksimum karakkter ayarlayabiliriz. NN işaretleiyoruz. boş olamsın diye. type adı versek yine aynı şeyleri yapabiliriz. 

> **INSERT INTO restaurants (name, type) VALUES ('Web Dev Mealery', 'German')** ile yeni veriler ekliyoruz. Geri getirmek için **SELECT * FROM restaurants** (*) her şeyi seçer.Flasa bastığımızda sonucu görüyoruz. Filtrelersek devamında **WHERE type  = 'German' AND name = 'w'** ile filtreleyebiliriz. AND veya OR gibi kullanabiliriz. Örneğin sadece name alanında sorgulama istiyorusak **SELECT name FROM restaurants WHERE type = 'German'** ya da name,type da diyebiliriz. **SELECT COUNT( * ) FROM restaurants WHERE type = 'German'** ile sayıları alabiliriz. Ya da **SUM( * )** ile toplamını bulabiliriz. 

> **UPDATE restaurants SET name = 'İzmir' WHERE id = 1** id 1 olanı name güncelleriz. 

> **DELETE FROM restaurants WHERE id = 1**  ile silme işlemleri yaparız. 

## Day 59 (SQL DEVAM)

> Daha uzun metin türleri örneğin yorum gibi **TEXT** olabilir.

> Tarih için datatype **DATETIME** ve ayrıca default/expression kısmı **CURRENT_TIMESTAMP** . Tarih için elle ekleme yapmıyoruz artık kendisi ekliyor çünkü. Ekleme yaparken id gibi boş bırakacağız. 

> **SELECT * FROM restaurants INNER JOIN addresses ON (restaurants.address_id = addresses.id)** BURADA İLİŞKİSELTABLOLARI BİRBİRİNE EKLEYEREK GÖSTERİYORUZ. Daha ayrıntılı **SELECT restaurants.name, addresses.* FROM restaurants INNER JOIN addresses ON (restaurants.address_id = addresses.id)** diyebiliriz. **SELECT  restaurants.id, restaurants.name, addresses.* FROM restaurants INNER JOIN addresses ON (restaurants.address_id = addresses.id)** gibi. **SELECT  restaurants.id, restaurants.name, addresses.*, types.name FROM restaurants INNER JOIN addresses ON (restaurants.address_id = addresses.id) INNER JOIN types ON restaurants.type_id = types.id WHERE addresses.city = 'Munich'**

> **SELECT reviews.*, restaurants.name AS restaurant_name, addresses.*, types.name AS restaurant_type FROM reviews
INNER JOIN restaurants ON reviews.restaurant_id = restaurants.id
INNER JOIN addresses ON restaurants.address_id = addresses.id
INNER JOIN types ON restaurants.type_id = types.id
WHERE rating > 3**

> SQL'de önemli olan ilişkisel veritabanı tablolar arası.

## Day 60 - NodeJS ExpressJS ve MySQL

> Backendde veritabanına bağlanmasının sebebi tarayıcında çalıştığında kodları değiştirebilmesidir. Çünkü backenddeki kodu görüntüleyemezler. 

## Day 61 - Veritabanı bağlantısı ve proje

> node mysql2 paketini kullanacağız. **npm install --save mysql2** ile kurulumu yapacağız. Bağlantı kurmamızı sağlayacak. Data klasöründe database.js dosyasında bağlantıyı kuracağız. **const mysql = require('mysql2')** sonrasında **const pool = mysql.createPool({
    host: 'localhost',
    database: 'blog',
    user: 'root',
    password: 'Eg145723.'
});** ile bağlantı havuzu oluşturuyoruz **module.exports = pool** ile veriyi dışarı aktarıyoruz. 

## Day 62 - Proje devamı

> #body {
  white-space: pre-wrap; /* This ensures that line breaks and whitespace are kept */ } Bununla tarayıcı varsayılanı kırıp yazdığımız text metinlerini göstermiş oluyoruz güzel olarak.

  ## Day 63 - NoSql & MongoDB

  > Önceden tablolar yapmamıza gerek yok. Sözde collection lar var.Temel olarak veri kaplarıdır. İçinde document var ve js nesnelerine benziyor. Key value değerleri var. Satırlar ve sütunlarla çalışmayız koleksiyonlarla çalışırız. Tüm table'ı planlamak zorunda değiliz burda. Genellikle ilgili verileri aynı yerde saklarız. NoSQL de daha fazla esneklik var. Çok büyük uygulamalarda esneklik bize performansa mal olabilir. Bunları deneyime göre bakacağız. 

  > MongoDb kullanacağız ücretsiz populer. 

  > [mongo db for windows](https://www.mongodb.com/try/download/community) ile mongodb kurabiliriz.

  > Hizmetler kısmından yine açıp kapayabiliriz. 

  > [mongo db shell](https://www.mongodb.com/try/download/shell) Sonrasında bu shell programını kuracağız. 

  > **show dbs** ile databeseleri görüntülüyoruz.

  > **use database_adi** ile yeni bir db oluşturuyoruz.

  > **db.restaurants.insertOne( { name: "Munich Schinzethosue", address: {street:"Some Street 5", streetNumber: "23b" }  } )** Veri ekleme

  > **db.restaurants.find()** tüm verileri bulma

  > **db.restaurants.find({ name: "Ersin Göç"})** özel arama.

  > **db.restaurants.find({}, {address:1})** Örneğin burda address verisini getiriyoruz sadece. Ama id bilgisi de geliyor. **db.restaurants.find({}, {address:1, _id:0})** burda da addressi getiriyor ve id getirmiyor. **db.restaurants.find({ name: "Ersin Göç"})** eşleşen tüm berileri getirir. **db.restaurants.findOne({ name: "Ersin Göç"})** Sadece ilk eşleşeni getirir. 

  > `db.restaurants.updateOne({_id: ObjectId("63876671e23c47cf31b0e858")}, {$set: {"address.streetNumber": 12} })` **update işlemi**

  > deleteOne ya da deleteMany kullanacağız. ilk eşleşeni ya da hepsini sileriz. ` db.restaurants.deleteOne({ _id: ObjectId("638765eee23c47cf31b0e857") }) ` **delete işlemi**. `db.restaurants.deleteMany({})` bütün her şeyi siler.

  > ` db.restaurants.insertOne( { name: "Berlin BurgerHouse", address: { street: "Hamstreet", streetNumber: "212", postalCode: 1251, city: "Milan", country: "Italy"  }, type: { typeId: ObjectId("6387b50be23c47cf31b0e85a"), name: "American"} }) ` **iç içe veri ekleme**

  >  **date verileri için** [mongo db date](https://www.mongodb.com/docs/manual/reference/method/Date/)

  > gt: greather than gte: greather than equeal lt: lower than, lte: lower than equal . Bunlar sorgulama yaparken işe yarıyor. `db.reviews.find( {rating: { $gt: 2  } }  ) `Burası 2'den büyük olduğunu gösteriyor bize. [mongo db query operators](https://www.mongodb.com/docs/manual/reference/operator/query/). `db.reviews.find({ $and: [{rating: {$gt: 1}}, {rating: {$lt:3}} ] } )` Burası 1 den büyük 3 ten küçük değerler. çoklu değer.

  > [mongodb nodejs](https://www.mongodb.com/docs/drivers/node/current/quick-start/) sitesinden bakabiliriz. **Bağlanmak için** `npm i mongodb` ile başlıyoruz. 

# FILE UPLOAD

  ## Day 67

  > Burada client-side ve server-side kısmımız var.

  > Çoklu veri dosyası için **multer** kullanacağız. Express için yazılmıştır. Githubta kullanımı var. ` npm i --save multer ` ile kurulumu yapacağız. 