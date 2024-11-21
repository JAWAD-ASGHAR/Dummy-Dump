const {
  getAddress,
  getDateOfBirth,
  getEmail,
  getFirstName,
  getId,
  getLastName,
  getPhoneNumber,
  getPrice,
  getProduct,
  getProfession,
  getRole,
  getStatus,
  getUserName,
} = require("./Func/publicUseFunctions.js");
const {
  createAge,
  createCreatedAt,
  createEmail,
  createUpdatedAt,
  createUserName,
} = require("./Func/selfUsedFunctions.js");

function dumpFirstName(length = 3) {
  return Array.from({ length }, () => getFirstName());
}

function dumpLastName(length = 3) {
  return Array.from({ length }, () => getLastName());
}

function dumpFullName(length = 3) {
  return Array.from({ length }, () => `${getFirstName()} ${getLastName()}`);
}

function dumpUsername(length = 3) {
  return Array.from({ length }, () => getUserName());
}

function dumpEmail(length = 3) {
  return Array.from({ length }, () => getEmail());
}

function dumpAddress(length = 3) {
  return Array.from({ length }, () => getEmail());
}

function dumpDOB(length = 3) {
  return Array.from({ length }, () => getDateOfBirth());
}

function dumpRole(length = 3) {
  return Array.from({ length }, () => getRole());
}

function dumpProfession(length = 3) {
  return Array.from({ length }, () => getProfession());
}

function dumpPhoneNumber(length = 3) {
  return Array.from({ length }, () => getPhoneNumber());
}

function dumpId(length = 3) {
  return Array.from({ length }, (_, index) => index + 1);
}

function dumpUser(length = 3) {
  return Array.from({ length }, (_, index) => {
    const id = index + 1;
    const firstName = getFirstName();
    const lastName = getLastName();
    const DOB = getDateOfBirth();
    const createdAt = createCreatedAt();
    return {
      id,
      firstName,
      lastName,
      username: createUserName(firstName, lastName),
      email: createEmail(firstName, lastName),
      fullName: `${firstName} ${lastName}`,
      address: getAddress(),
      phone: getPhoneNumber(),
      dateOfBirth: DOB.toDateString(),
      age: createAge(DOB),
      role: getRole(),
      createdAt,
      updatedAt: createUpdatedAt(createdAt),
    };
  });
}

function dumpPrice(length = 3) {
  return Array.from({ length }, () => getPrice());
}

function dumpOrder(length = 3) {
  return Array.from({ length }, (_, index) => {
    const id = index + 1;
    const createdAt = createCreatedAt();
    return {
      orderId: id,
      userId: getUserName(),
      status: getStatus(),
      name: getProduct().name,
      price: getProduct().price,
      address: getAddress(),
      productId: getId(),
      createdAt,
      deliveryDate: createUpdatedAt(createdAt),
    };
  });
}

function dumpProduct(length = 3) {
    return Array.from({ length }, (_, index) => {
        const id = index + 1;
        const createdAt = createCreatedAt();
        return {
          id,
          product: getProduct(),
          createdAt,
          updatedAt: createUpdatedAt(createdAt),
        };
      });
}


module.exports = {
  dumpFirstName,
  dumpLastName,
  dumpFullName,
  dumpUsername,
  dumpEmail,
  dumpAddress,
  dumpDOB,
  dumpRole,
  dumpProfession,
  dumpPhoneNumber,
  dumpId,
  dumpUser,
  dumpPrice,
  dumpOrder,
  dumpProduct,
};

