const seatButton = document.querySelectorAll('.btn');
let countButtons=0;
for (const seats of seatButton) {
    seats.addEventListener('click', function () {     
        // ------------------------------------------4 Tickets Only
        countButtons++;
        if(countButtons>4){
            return alert("Sorry,You can't Buy More then 4 Tickets!")
        }
        // --------------------------------------------Color Assign
        seats.classList.add('bg-green');
        // --------------------------------------------Details
        const bookedSeat=document.getElementById('sample');

        let div=document.createElement('div');
        let list1=document.createElement('li');
        list1.innerText=seats.innerText;
        let list2=document.createElement('li');
        list2.innerText="Economy";
        let list3=document.createElement('li');
        list3.innerText="550";
        
        div.appendChild(list1);
        div.appendChild(list2);
        div.appendChild(list3);

        div.classList.add('flex','justify-between');

        bookedSeat.appendChild(div);


        // --------------------------------------------Seat Count
        const seat_Count = document.getElementById('seat-count');
        const seatCountConvert = parseInt(seat_Count.innerText);
        const seatCounted = seatCountConvert + 1;
        seat_Count.innerText = seatCounted;

        // -------------------------------------------Seat Left
        const seat_left = document.getElementById('seat-left');
        const seatLeftConvert = parseInt(seat_left.innerText);
        const seatLeft = seatLeftConvert - 1;
        seat_left.innerText = seatLeft;

        // -------------------------------------------Total Price
        const total_price = document.getElementById('total-price');
        const totalPriceConvert = parseInt(total_price.innerText);
        const totalPriceCount = totalPriceConvert + 550;
        total_price.innerText = totalPriceCount;

        // -------------------------------------------Grand Total
        const grandTotal = document.getElementById('grand-total');
        const grandTotalConvert = parseInt(grandTotal);
        grandTotal.innerText = totalPriceCount;

        // -------------------------------------------NEXT Button
        const phoneNumber=document.getElementById('ph-number');
        const nextBtn=document.getElementById('next-btn');
        phoneNumber.addEventListener('keyup',function(){
            nextBtn.removeAttribute('disabled');
            nextBtn.classList.add('bg-green');
            nextBtn.classList.remove('bg-gray');
        })
        
        
    })
}
// ----------------------------------------------Coupon
const couponApplyBtn=document.getElementById('coupon-apply-btn');
let couponField=document.getElementById('coupon');

couponField.addEventListener('focus',function(){
    couponApplyBtn.removeAttribute('disabled');
    couponApplyBtn.classList.add('bg-green');
    couponApplyBtn.classList.remove('bg-gray');

})

couponApplyBtn.addEventListener('click',function(){
    let couponField=document.getElementById('coupon');
    let grand_total = document.getElementById('grand-total');
    const total_price = document.getElementById('total-price');
    const inputField=document.getElementById('input-sec')
    const discountField=document.getElementById('discount-sec');
    let discounts=document.getElementById('discount');

    const discounted=parseInt(total_price.innerText)*0.15;
    const calculate1=(parseInt(total_price.innerText)-(parseInt(total_price.innerText)*0.15));
    const calculate2=(parseInt(total_price.innerText)-(parseInt(total_price.innerText)*0.2));

    if(couponField.value==="NEW15"){
        discountField.classList.remove('hidden');
        inputField.classList.add('hidden');
        discounts.innerText=discounted;
        grand_total.innerText=calculate1;
    }
    else if(couponField.value==="Couple 20"){
        discountField.classList.remove('hidden');
        inputField.classList.add('hidden');
        discounts.innerText=discounted;
        grand_total.innerText=calculate2;
    }
    else if(couponField.value===""){
        return alert('Please Enter a Coupon Code')
    }
    else{
        couponField.value="";
        return alert('Invalid Cupon Code');
    }
    
})
// -----------------------------------------------End Page
// -------------------------------------------NEXT Button
const nextBtn=document.getElementById('next-btn');
const congrates=document.getElementById('congrates');
nextBtn.addEventListener('click',function(){
    congrates.classList.remove('hidden');
    congrates.scrollIntoView();
})