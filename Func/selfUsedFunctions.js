function createCreatedAt() {
  const start = new Date(2010, 0, 1); // Start date: January 1, 2010
  const end = new Date(); // End date: Today's date
  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
}

function createUpdatedAt(createdAt) {
  const start = new Date(createdAt.getTime()); // Start at createdAt date
  const end = new Date(); // End date: Today's date
  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
}

function createImage(firstName = "John", lastName = "Doe", size = 200) {
  // Helper function to generate a random dark/vibrant color
  function getRandomBackgroundColor() {
    const colors = [
      "#4CAF50", // Green
      "#FF5722", // Orange
      "#3F51B5", // Blue
      "#9C27B0", // Purple
      "#795548", // Brown
      "#FF9800", // Amber
      "#009688", // Teal
      "#2196F3", // Light Blue
      "#673AB7", // Deep Purple
      "#E91E63", // Pink
      "#607D8B", // Blue Grey
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Create a canvas element
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");

  // Draw background color
  const bgColor = getRandomBackgroundColor();
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, size, size);

  // Draw initials
  const initials = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
  ctx.fillStyle = "#FFFFFF"; // White text
  ctx.font = `${size * 0.4}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(initials, size / 2, size / 2);

  // Return the image as a data URL
  return canvas.toDataURL("image/png");
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

export {
  createCreatedAt,
  createUpdatedAt,
  createImage,
  createUserName,
  createEmail,
  createAge,
  createPhoneNumber,
};
