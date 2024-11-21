function createCreatedAt() {
  const start = new Date(2010, 0, 1); // Start date: January 1, 2010
  const end = new Date(); // End date: Today's date
  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createUpdatedAt(createdAt) {
  const start = new Date(createdAt.getTime()); // Start at createdAt date
  const end = new Date(); // End date: Today's date
  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
}

function createUserName(firstName = "John", lastName = "Doe") {
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

function createEmail(firstN, lastN) {
  const firstName = firstN.toLowerCase();
  const lastName = lastN.toLowerCase();
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

function createAge(DOB) {
  const currentYear = new Date().getFullYear();
  const birthYear = DOB.getFullYear();
  return currentYear - birthYear;
}

function createPhoneNumber(code = "1") {
  const countryCode = "+" + code; 
  const areaCode = Math.floor(100 + Math.random() * 900); 
  const centralOfficeCode = Math.floor(100 + Math.random() * 900); 
  const lineNumber = Math.floor(1000 + Math.random() * 9000); 

  return `${countryCode} (${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}

module.exports = {
  createCreatedAt,
  createUpdatedAt,
  createUserName,
  createEmail,
  createAge,
  createPhoneNumber,
};

