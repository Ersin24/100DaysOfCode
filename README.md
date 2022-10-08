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

## Day9-10

> First project added

## Day11

> Netlify drop üzerinden ücretsiz yayına aldık 

> Favicon generetors ile normal bir resmi favicona çevirdik ve link ile include ettik

> "/" Server'da bunu kullanacağız

## Day12

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

## Day13

> **git branch** hangi branchta olduğumuzu gösteriyor. Aynı zamanda git status ile de bunu görebiliyoruz. Default olarak **master** geliyor ve bizim bunu değiştirmemiz lazım. **git branch -m main** ile main adında branch açabiliriz.

> **git checkout -b feature** dersek feature adında yeni bir branch açıyoruz ve ona geçiyoruz. git branch dersek ya da status dersek görüyoruz yine

> **git add .** tüm yeni oluşumları ekler

> **git merge branchAdı** dersek bulunduğumuz branch ile yazdığımız branch adını birleştirir. commitleri ve eğer dosya varsa onları da birleştirir getirir. Bunu tek seferde yapıp bitirmiyoruz. Örneğin feature branch'tayken yeni commit yaptık sonra main branchına geçip feature branchını merge ettik diyelim. Bundan sonra tekrar feeature konumuna gidersek tekrar yeni bir şey eklersek otomatik olarak bunu main branchı ÇEKMEZ! Biz yine merge etmemiz gerek dosyalar ve commitler için

## Deleting

> **git rm dosyaAdi** ile aynı dizinde bulunmak şartıyla bir dosyayı silebiliriz. 

> **git reset --hard HEAD~1** son yapılan değişkliği geri alır. Eğer 1 yerine 2 yazarsak son yapılan 2 değişikliği geri alır. Ayrıca bunu yapmak için git add ve git commit yapılması gerekir. Aksi halde en son ne zaman yapıldıysa ta oraya kadar gidecektir. 

> **git branch -D feautre** feature isimli branchı siler.

> 
