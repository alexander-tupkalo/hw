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