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

//-------------------------------------------------

const email = "john@example.com";
const password = "qwerty";
const isEmailVerified = true;

// Перевiрка поле email та password

const isEmailFilled = email !== "";
const isPasswordFilled = password !== "";

// Можна пускати далі

const canLogin = isEmailFilled && isPasswordFilled && isEmailFilled;

if (canLogin) {
    console.log("Логiн успiшний");
} else {
    console.log("Перевiрте даннi");
}