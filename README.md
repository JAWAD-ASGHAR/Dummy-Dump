# Dummy Dump Package

## Overview

`dummy-dump` is a Node.js utility package designed for generating dummy data for a wide variety of use cases. It provides pre-configured functions to create fake data such as user profiles, orders, products, and more, making it ideal for development and testing purposes.

---

## Usage

Here’s how you can use `dummy-dump` in your Node.js project:

### Import the Package

```javascript
const { dumpUser, dumpOrder, dumpProduct } = require('dummy-dump');
```

#### Example: Users
```javascript
const users = dumpUser(5); // Generates 5 dummy users
console.log(users);
```

#### Example: Orders
```javascript
const orders = dumpOrder(3); // Generates 3 dummy orders
console.log(orders);
```

#### Example: Products
```javascript
const products = dumpProduct(10); // Generates 10 dummy products
console.log(products);
```

---

## Functions

Below are the key functions provided by this package:

### User-Related Functions
- **`dumpFirstName()`**: Returns an array of dummy first names.
- **`dumpLastName()`**: Returns an array of dummy last names.
- **`dumpFullName()`**: Returns an array of dummy full names.
- **`dumpUsername()`**: Returns an array of dummy usernames.
- **`dumpEmail()`**: Returns an array of dummy emails.
- **`dumpAddress()`**: Returns an array of dummy addresses.
- **`dumpDOB()`**: Returns an array of dummy dates of birth.
- **`dumpRole()`**: Returns an array of dummy user roles.
- **`dumpProfession()`**: Returns an array of dummy professions.
- **`dumpPhoneNumber()`**: Returns an array of dummy phone numbers.
- **`dumpId()`**: Returns an array of sequential IDs.
- **`dumpUser()`**: Returns an array of full dummy user profiles.

---

## Example Outputs

### Dummy User
```javascript
{
  id: 1,
  firstName: "John",
  lastName: "Doe",
  username: "john_doe",
  email: "john.doe@example.com",
  fullName: "John Doe",
  address: "123 Main St, Springfield",
  phone: "123-456-7890",
  dateOfBirth: "1990-01-01",
  age: 34,
  role: "Admin",
  createdAt: "2024-01-01T10:00:00Z",
  updatedAt: "2024-01-02T10:00:00Z"
}
```

### Dummy Order
```javascript
{
  orderId: 1,
  userId: "johndoe",
  status: "Processing",
  name: "Wireless Mouse",
  price: "$25.00",
  address: "123 Main St, Springfield",
  productId: 101342,
  createdAt: "2024-01-01T10:00:00Z",
  deliveryDate: "2024-01-05T10:00:00Z"
}
```

### Dummy Product
```javascript
{
  id: 1,
  product: {
    "name": "Portable Steamer",
    "description": "Compact steamer for clothes and upholstery.",
    "price": 29.99,
    "stock": 160,
    "rating": 4.6,
    "reviews": [
      {
        "reviewer": "Casey Lee",
        "comment": "Works great for removing wrinkles.",
        "rating": 5
      }
    ],
    "imageUrl": "https://m.media-amazon.com/images/I/61otWZA6uZL.jpg"
  },
  createdAt: "2024-01-01T10:00:00Z",
  updatedAt: "2024-01-02T10:00:00Z"
}
```

---

## Customization

You can easily modify or extend the functions provided in `dummy-dump` by editing the utility methods in the `Func` directory:

- **`publicUseFunctions.js`**: Common functions available for generating dummy data.
- **`selfUsedFunctions.js`**: Helper functions used internally by `dummy-dump`.

---

## Contributing

Contributions are welcome! If you’d like to improve this package, feel free to submit a pull request or open an issue on the GitHub repository.

---

## License

This package is licensed under the MIT License.

---

For questions or feedback, please reach out to connect.jawadasghar@gmail.com.
