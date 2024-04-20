

document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    const onPressCart = document.querySelector('.onPressCart');
    const discount=document.querySelector(".discount");

    addToCartBtn.addEventListener('click', () => {
        const selectedColorButton = document.querySelector('.productsColor button.selected');
        const color = selectedColorButton ? selectedColorButton.getAttribute('data-color') : "No color selected";
        const checkedInput = document.querySelector('.productsSize input:checked');
        const size = checkedInput ? checkedInput.value : "No size selected";
        if (color== "#BBD278"){
            onPressCart.textContent = `Embrace Sideboard with Color Green and Size ${size} added to cart`;
        }
        else if(color=="#FFD3F8"){
            onPressCart.textContent = `Embrace Sideboard with Color Magenta and Size ${size} added to cart`;

        }
        else if(color=="#ECDECC"){
            onPressCart.textContent = `Embrace Sideboard with Color Pink and Size ${size} added to cart`;

        }
        else if(color=="#BBC1F8"){
            onPressCart.textContent = `Embrace Sideboard with Color Blue and Size ${size} added to cart`;

        }

        
        
        onPressCart.style.width = "550px";
        onPressCart.style.height = "17px";
        onPressCart.style.gap = "0px";
        onPressCart.style.opacity = "1"; 
        onPressCart.style.fontFamily = "Inter";
        onPressCart.style.fontSize = "14px";
        onPressCart.style.fontWeight = "600";
        onPressCart.style.lineHeight = "16.94px";
        onPressCart.style.textAlign = "center";
        onPressCart.style.color = "#000000";
        onPressCart.style.background = "#E7F8B7";
        onPressCart.style.marginTop = "12px";

    });
const orPriceElement = document.querySelector('.orPrice');
const lineThroughElement = document.querySelector('.line-through');
const orPriceValue = parseFloat(orPriceElement.textContent.replace(/[^\d.]/g, ''));
const lineThroughValue = parseFloat(lineThroughElement.textContent.replace(/[^\d.]/g, ''));
const discount1 = Math.floor ((lineThroughValue - orPriceValue) / lineThroughValue * 100);
discount.textContent=`${discount1}% Off`;

    const radioButtons = document.querySelectorAll('.productsSize input[type="radio"]');
    const radioLabels = document.querySelectorAll('.productsSize label');
    
    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            radioLabels.forEach(label => {
                label.style.color = ""; 
            });
            radioLabels[index].style.color = "#3A4980";
        });
    });
    const buttons = document.querySelectorAll('.button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        // Toggle the 'selected' class when the button is clicked
        this.classList.toggle('selected');
      });
    });
    
   
    const colorButtons = document.querySelectorAll('.productsColor button');
    colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        colorButtons.forEach(btn => {
            btn.classList.remove('selected');
            btn.style.border="";
            btn.style.boxShadow="";
        });
        button.classList.add('selected');
        const newColor = button.getAttribute('data-color');
        button.style.border=`4px solid ${newColor}`;
        button.style.boxShadow="inset 0 0 0 5px white";
       
    });
 });

    
    
    const thumbnailImages = document.querySelectorAll('.thumbnail1');
    const mainImage = document.getElementById('choosenPic');

    thumbnailImages.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            thumbnailImages.forEach(img => {
                img.style.border = "";
            });
            thumbnail.style.border = "3px solid #3A4980 ";
            const newSrc = thumbnail.src;
            mainImage.src = newSrc;
        });
});


});
