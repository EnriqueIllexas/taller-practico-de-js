const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon")
const btn = document.querySelector("#calcular")
const pResult = document.querySelector("#result")

btn.addEventListener("click", calcularPrecioConDescuento)

function calcularPrecioConDescuento(){
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon){
        pResult.innerHTML = "RELLENA EL FORMULARIO MIERDA"
        return;
    }
    
    let discount;

    if(coupon == "Juan_dc_es-batman"){
        discount = 30;
    }
    else if(coupon == "no-le-digas-a-nadie"){
        discount = 25;
     }
    else{
        pResult.innerHTML =  "el cupon es invalido WAZAA"; 
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerHTML = "el nuevo precio con el cupon es $ " + newPrice 
}
