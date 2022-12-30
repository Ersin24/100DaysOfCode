//Sil düğmelerini dinliyoruz
//Diziden gelecek tüm delete sileceğimiz için all seçiyourz
const deleteProductButtonElements = document.querySelectorAll('.product-item button')

//Dataset ile dinledğimiz delete tuşlarını çekeceğiz
async function deleteProduct(event){
    const buttonElement = event.target;
    //Burası product.item.ejs dosyasındaki attributten geliyor
    const productId = buttonElement.dataset.productid;
    const csrfToken = buttonElement.dataset.csrf;

    //Şimdi backende göndermek için fetch() işlemi uygulayacağız. Axios da kullanılabilr
    const response = await fetch('/admin/products/' + productId + '?_csrf=' + csrfToken, {
        method: 'DELETE'
    })

    
    //İşler ters giderse
    if(!response.ok){
        alert('Something went wrong!')
        return;
    }

    //Li öğesine kadar parentElement ile çıkıyoruz
    buttonElement.parentElement.parentElement.parentElement.parentElement.remove();


}

//Bütün verilerdeki dosyayı silmek istiyoruz

for (const deleteProductButtonElement of deleteProductButtonElements){
    deleteProductButtonElement.addEventListener('click', deleteProduct)
}