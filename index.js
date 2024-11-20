import {
  getDateOfBirth,
  getEmail,
  getFirstName,
  getLastName,
  getProfession,
  getRole,
  getUserName,
} from "./Func/publicUseFunctions.js";
import { createEmail, createUserName } from "./Func/selfUsedFunctions.js";

function dumpFirstName(length) {
  return length > 0 ? Array.from({ length }, () => getFirstName()) : [];
}

function dumpLastName(length) {
  return length > 0 ? Array.from({ length }, () => getLastName()) : [];
}

function dumpFullName(length) {
  return length > 0
    ? Array.from({ length }, () => `${getFirstName()} ${getLastName()}`)
    : [];
}

function dumpUsername(length) {
  return length > 0 ? Array.from({ length }, () => getUserName()) : [];
}

function dumpEmail(length) {
  return length > 0 ? Array.from({ length }, () => getEmail()) : [];
}

function dumpAddress(length) {
  return length > 0 ? Array.from({ length }, () => getEmail()) : [];
}

function dumpDOB(length) {
  return length > 0 ? Array.from({ length }, () => getDateOfBirth()) : [];
}

function dumpRole(length) {
  return length > 0 ? Array.from({ length }, () => getRole()) : [];
}

function dumpProfession(length) {
  return length > 0 ? Array.from({ length }, () => getProfession()) : [];
}

function dumpUser(length) {
  return length > 0
    ? Array.from({ length }, (_, index) => {
        const id = index + 1;
        const firstName = getFirstName();
        const lastName = getLastName();
        const DOB = getDateOfBirth();
        return {
          id,
          firstName,
          lastName,
          username: createUserName(firstName, lastName),
          email: createEmail(firstName, lastName),
          fullName: `${firstName} ${lastName}`,
          address: getAddress(),
          dateOfBirth: DOB.toDateString(),
          age: createAge(DOB),
          role: getRole(),
        };
      })
    : [];
}

module.exports = {
  dumpFirstName,
  dumpLastName,
  dumpUsername,
  dumpEmail,
  dumpFullName,
  dumpAddress,
  dumpDOB,
  dumpRole,
  dumpProfession,
  dumpUser,
};
