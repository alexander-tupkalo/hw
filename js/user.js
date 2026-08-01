const user = {
    name: "Alex",
    age: 38,
    email: "alex@example.com",
    isSubscribed: true,
    balance: "150.25",
    verified: "1"
};

const numberBalance = Number(user.balance);
const isVerified = user.verified === "1";

const hasAccess =
    user.age >= 18 &&
    isVerified &&
    (user.isSubscribed || numberBalance > 0);

const isAgeEqual = user.age == "38";
const isAgeStrictEqual = user.age === "38";

let accessMessage = "";

if (user.age < 18) {
    accessMessage = "Access restricted due to age";
}

console.log(hasAccess);
console.log(isAgeEqual);
console.log(isAgeStrictEqual);
console.log(accessMessage);

//

const order = {
    total: "950",
    currency: "UAH",
    isPaid: true,
    delivery: "yes",
    priority: "1"
};

const numberTotal = Number(order.total);
const hasDelivery = order.delivery === "yes";
const isPriority = order.priority === "1";
const isLargeOrder = numberTotal >= 1000;

let orderDescription = "";
if (!order.isPaid) {
    orderDescription = "Order is not paid";
}
if (order.isPaid && hasDelivery) {
    orderDescription = "Paid order with delivery";
}
if (isLargeOrder && order.isPaid) {
    orderDescription = "High-value paid order";
}

if (order.isPaid && !hasDelivery) {
    orderDescription = "Paid order without delivery";
}
if (isPriority) {
    orderDescription += " [PRIORITY]";
}

const totalEqualLoose = order.total == numberTotal;
const totalEqualStrict = order.total === numberTotal;

console.log(orderDescription);
console.log(totalEqualLoose);
console.log(totalEqualStrict);

//

const systemSettings = {
    darkMode: true,
    fontSize: "18",
    language: "en",
    betaAccess: "true"
};

const numberFontSize = Number(systemSettings.fontSize);
const hasBetaAccess = systemSettings.betaAccess === "true";

const isLargeFont = numberFontSize >= 18;

let settingsDescription = "";
if (systemSettings.darkMode && isLargeFont) {
    settingsDescription = "Dark mode + large font";
}
if (systemSettings.darkMode && !isLargeFont) {
    settingsDescription = "Dark mode";
}
if (!systemSettings.darkMode && isLargeFont) {
    settingsDescription = "Large font";
}
if (!systemSettings.darkMode && !isLargeFont) {
    settingsDescription = "Default settings";
}
if (hasBetaAccess) {
    settingsDescription += " (Beta tester)";
}

console.log("Settings: ", settingsDescription);

//

const orderAccess =
    order.isPaid || numberBalance >= numberTotal;

const systemAccess =
    numberFontSize > 12 &&
    (systemSettings.language === "en" ||
     systemSettings.language === "uk");

const finalAccess =
    hasAccess &&
    orderAccess &&
    systemAccess;

if (finalAccess) {
    console.log("Full access granted");
} else {
    console.log("Access denied");
}
if (!hasAccess) {
    console.log("User check failed");
}
if (!orderAccess) {
    console.log("Order check failed");
}
if (!systemAccess) {
    console.log("System settings check failed");
}