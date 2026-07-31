const hasPromoCode = true;
const cartTotal = 199;
const isBlackFriday = false;

const isDiscountApplied = (cartTotal >= 100 && hasPromoCode) || isBlackFriday;

if (isDiscountApplied) {
    console.log("Знижка застосована");
} else {
    console.log("Знижка не застосована");
}

const noDiscount = !isDiscountApplied;

console.log(noDiscount);
