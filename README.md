# API Security Lab 🔐

A practical security laboratory focused on identifying, exploiting, and mitigating common API vulnerabilities based on the OWASP API Security Top 10.

This project demonstrates vulnerable API implementations, security testing techniques, and recommended remediation strategies for building secure applications.

## 🎯 Objectives

- Understand common API security vulnerabilities
- Practice security testing methodologies
- Document exploitation scenarios and mitigations
- Apply secure development practices
- Build hands-on experience with API security tools

## 🛠️ Technologies

- Node.js
- Express.js
- PostgreSQL
- REST APIs
- JSON Web Tokens (JWT)
- OAuth 2.0 / OpenID Connect
- Postman
- OWASP ZAP
- Burp Suite

## 📂 Project Structure


api-security-lab/
│
├── vulnerable-api/
│ └── Intentionally vulnerable API implementations
│
├── secure-api/
│ └── Secure implementations and mitigations
│
├── postman/
│ └── API testing collections
│
├── docs/
│ ├── vulnerabilities.md
│ └── mitigations.md
│
└── screenshots/
└── Security testing evidence


## 🔍 Vulnerabilities Covered

### OWASP API Security Top 10

- [ ] Broken Object Level Authorization (BOLA / IDOR)
- [ ] Broken Authentication
- [ ] Broken Object Property Level Authorization
- [ ] Unrestricted Resource Consumption
- [ ] Broken Function Level Authorization
- [ ] Unrestricted Access to Sensitive Business Flows
- [ ] Server Side Request Forgery (SSRF)
- [ ] Security Misconfiguration
- [ ] Improper Inventory Management
- [ ] Unsafe Consumption of APIs

## 🧪 Security Testing

Tools used:

- OWASP ZAP
- Burp Suite
- Postman
- Nmap
- Browser Developer Tools

Testing examples:

- Authentication testing
- Authorization testing
- JWT analysis
- API endpoint enumeration
- Input validation testing
- Security header analysis

## 📚 Learning Resources

Based on:

- OWASP API Security Top 10
- OWASP Testing Guide
- Secure API Development Practices

## 🚧 Project Status

Currently under development.

New vulnerabilities, exploitation examples, and remediation guides will be added progres