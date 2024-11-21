const names = require("../Data/names.json");
const address = require("../Data/address.json");
const professions = require("../Data/profession.json");
const products = require("../Data/products.json");

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getFirstName() {
  return getRandomItem(names.firstName);
}

function getLastName() {
  return getRandomItem(names.lastName);
}

function getFullName() {
  return `${getRandomItem(names.firstName)} ${getRandomItem(names.lastName)}`;
}

function getAddress() {
  return getRandomItem(address);
}

function getDateOfBirth() {
  const start = new Date(1900, 0, 1); // Start date: January 1, 1900
  const end = new Date(2023, 0, 1); // End date: January 1, 2023
  const randomTime =
      start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
}

function getRole() {
  const roles = ["admin", "user", "guest", "moderator", "superadmin"];
  return getRandomItem(roles);

}

function getProfession() {
  return getRandomItem(professions);
}

function getUserName() {
  const firstName = getRandomItem(names.firstName);
  const lastName = getRandomItem(names.lastName);
  const randomNumber = Math.floor(Math.random() * 100);

  const patterns = [
    `${firstName}${randomNumber}`,
    `${firstName}-${lastName}`,
    `${firstName}_${lastName}`,
    `${firstName}${lastName}`,
    `${lastName}-${firstName}`,
    `${lastName}_${firstName}`,
    `${lastName}${randomNumber}`,
    `${lastName}${firstName}`,
    `${randomNumber}_${lastName}`,
    `${randomNumber}${lastName}`,
    `${randomNumber}${firstName}`,
    `${randomNumber}_${firstName}`,
    `${firstName}.${lastName}`,
    `${lastName}.${firstName}`,
  ];

  return getRandomItem(patterns);
}

function getEmail() {
  const firstName = getRandomItem(names.firstName).toLowerCase();
  const lastName = getRandomItem(names.lastName).toLowerCase();
  const randomNumber = Math.floor(Math.random() * 1000);

  const domains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "live.com",
    "aol.com",
    "comcast.net",
    "verizon.net",
    "att.net",
    "icloud.com",
    "protonmail.com",
    "msn.com",
    "cox.net",
    "sbcglobal.net",
    "bellsouth.net",
    "charter.net",
    "earthlink.net",
    "frontier.com",
    "qq.com",
    "163.com",
    "126.com",
    "yeah.net",
  ];

  const patterns = [
    `${firstName}@${getRandomItem(domains)}`,
    `${firstName}.${lastName}@${getRandomItem(domains)}`,
    `${firstName}_${lastName}@${getRandomItem(domains)}`,
    `${lastName}${randomNumber}@${getRandomItem(domains)}`,
    `${firstName}${randomNumber}@${getRandomItem(domains)}`,
    `${firstName}-${lastName}@${getRandomItem(domains)}`,
  ];

  return getRandomItem(patterns);
}

function getPhoneNumber(code = "1") {
  const countryCode = "+" + code; 
  const areaCode = Math.floor(100 + Math.random() * 900); 
  const centralOfficeCode = Math.floor(100 + Math.random() * 900); 
  const lineNumber = Math.floor(1000 + Math.random() * 9000); 

  return `${countryCode} (${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}

function getProduct() {
  return getRandomItem(products);
}

function getId() {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function getNumber() {
  return Math.floor(1000000 + Math.random() * 9000000);
}

function getBoolean() {
  return Math.random() >= 0.5;
}

function getStatus() {
  const status = ["pending", "processing", "shipped", "delivered", "cancelled"];
  return getRandomItem(status);
}

function getPrice() {
  const price = Math.floor(100 + Math.random() * 900);
  const cents = Math.floor(Math.random() * 100);
  return `${price}.${cents}`;
}

module.exports = {
  getFirstName,
  getLastName,
  getUserName,
  getEmail,
  getFullName,
  getAddress,
  getDateOfBirth,
  getRole,
  getProfession,
  getPhoneNumber,
  getProduct,
  getId,
  getNumber,
  getPrice,
  getStatus,
  getBoolean
};

