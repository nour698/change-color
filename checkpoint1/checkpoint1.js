let clbtList = document.querySelectorAll('.cl');

clbtList.forEach(clbt => {
    clbt.addEventListener('click', function() {
        if (this.classList.contains('bg-slate-200')) {
            this.classList.remove('bg-slate-200'); 
            this.classList.add('bg-pink-300'); 
            this.innerHTML = '<i class="fa-solid fa-heart" style="color: #f5003d;"></i>'
        } else {
            this.classList.remove('bg-pink-300');
            this.classList.add('bg-slate-200'); 
            this.innerHTML = '<i class=" fa-solid fa-heart " style=" color: #000000;"></i>' 
        }
    });
});

let deltList = document.querySelectorAll('.del'); 
deltList.forEach(delt => {
    delt.addEventListener('click', function() {
        let itemContainer = this.closest('.A'); 
        itemContainer.style.display = 'none'; 
        
    });
});
let pbList = document.querySelectorAll('.plus'); 
let mbList = document.querySelectorAll('.minus');
let totprice = document.querySelector('.tprice')


pbList.forEach(pb => {
    let itemcontainer = pb.closest('.A');
    let numb = itemcontainer.querySelector('.num');
    let p = itemcontainer.querySelector('.P'); 
    let pp = p.textContent; 
    let x = Number(pp.substring(1, pp.length())); 
    console.log(x);
    
    pb.addEventListener('click', function() {
        let price = itemcontainer.querySelector('.price');
        let currentPrice = Number(price.innerHTML.substring(1, price.innerHTML.length()));
        price.innerHTML = '€' + String(currentPrice + x); 
    });
});




