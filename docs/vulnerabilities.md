
# API Security Lab

## BOLA / IDOR

## Description

Broken Object Level Authorization (BOLA) occurs when an API exposes object identifiers and does not verify if the authenticated user has permission to access those objects.

---

## Vulnerable Example

Endpoint:


GET /api/orders/:id


The API only checked if the order existed:

```javascript
orders.find(order => order.id === orderId)

An attacker could modify the ID:

GET /api/orders/1
GET /api/orders/2

and access another user's information.

Impact

An attacker could access unauthorized data from other users.

Examples:

Customer orders
Personal information
Financial data
Private resources
Remediation

The API must verify ownership:

order.userId === req.user.id

The resource must belong to the authenticated user before returning data.

Security Controls Implemented
JWT authentication
Token verification middleware
Object ownership validation


# Module 2 - Broken Authentication

## Overview

Broken Authentication occurs when an application implements insecure authentication mechanisms that allow attackers to compromise user accounts.

This lab intentionally includes authentication weaknesses to demonstrate common attack techniques and their impact.

---

## Vulnerabilities

### 1. Plaintext Password Storage

User passwords are stored directly in the simulated database.

Example:

```javascript
const users = [
  {
    username: "admin",
    password: "123456"
  }
];
```

If an attacker gains access to the database, all user credentials are immediately exposed.

**Risk**

- Credential disclosure
- Account compromise
- Password reuse attacks

---

### 2. Plaintext Password Comparison

The application compares the submitted password directly with the stored password.

```javascript
user.password === password
```

This approach only works when passwords are stored in plaintext and does not provide any cryptographic protection.

**Risk**

- Insecure authentication
- Exposure of user credentials

---

### 3. Brute Force Attack

The login endpoint accepts unlimited authentication attempts.

An attacker can automate login requests using common password dictionaries until the correct password is found.

Example password list:

```

123
admin
password
12345
123456
qwerty

```

**Risk**

- Unauthorized access
- Automated password guessing
- Account takeover

---

### 4. User Enumeration

Applications that return different responses for:

- User does not exist
- Incorrect password

allow attackers to discover valid usernames.

Although this lab later mitigates this issue, it is a common authentication vulnerability.

**Risk**

- Username discovery
- More effective brute force attacks

---

## Impact

Successful exploitation may result in:

- Unauthorized account access
- Credential theft
- Privilege escalation
- Credential stuffing attacks
- Data exposure

---

## References

- OWASP Top 10 2021 - A07 Identification and Authentication Failures
- OWASP ASVS Authentication Verification Requirements
- CWE-256 Plaintext Storage of Password
- CWE-307 Improper Restriction of Excessive Authentication Attempts