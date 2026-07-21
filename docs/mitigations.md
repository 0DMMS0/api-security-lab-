# Module 2 - Mitigations

## Overview

This module demonstrates common security controls used to protect authentication mechanisms against credential theft and brute force attacks.

---

## 1. Password Hashing (bcrypt)

Passwords are no longer stored in plaintext.

Instead, bcrypt is used to generate a secure password hash.

```javascript
const hash = await bcrypt.hash(password, 10);
```

During authentication:

```javascript
await bcrypt.compare(password, user.password);
```

The original password is never stored or compared directly.

**Benefits**

- Protects passwords if the database is compromised
- Slows offline password cracking attacks

---

## 2. Automatic Password Salting

bcrypt automatically generates a unique salt for every password.

Even if two users choose the same password, their hashes will be completely different.

**Benefits**

- Prevents Rainbow Table attacks
- Makes precomputed hash attacks ineffective

---

## 3. Rate Limiting

The login endpoint uses Express Rate Limit to restrict authentication attempts.

```javascript
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5
});
```

After five authentication attempts, the server returns:

```

429 Too Many Requests

```

**Benefits**

- Mitigates brute force attacks
- Reduces automated login attempts
- Slows password guessing attacks

---

---

## 4. JWT Authentication

The application now uses JSON Web Tokens (JWT) to authenticate users after a successful login.

Example:

```javascript
const token = jwt.sign(
    {
        id: user.id,
        role: user.role
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "15m"
    }
);

## 4. Generic Authentication Responses

The application always returns the same response for failed authentication:

```

Invalid credentials

```

The server does not reveal whether:

- The username exists
- The password is incorrect

**Benefits**

- Prevents username enumeration
- Reduces attacker reconnaissance

---

## Security Improvements Achieved

This implementation provides protection against:

- Plaintext password exposure
- Brute force attacks
- User enumeration
- Credential disclosure

---

## Future Improvements

The next module will implement:

- JSON Web Tokens (JWT)
- Access Tokens
- Refresh Tokens
- Authorization Middleware
- Role-Based Access Control (RBAC)
- Multi-Factor Authentication (MFA)
- Secure Cookies
- Session Management
- Token Expiration
- Token Revocation

---

## References

- OWASP Top 10 2021 - A07 Identification and Authentication Failures
- OWASP ASVS v4 Authentication Requirements
- NIST SP 800-63B Digital Identity Guidelines