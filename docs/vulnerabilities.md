# BOLA / IDOR

## Description

Broken Object Level Authorization happens when an API exposes an object identifier without verifying if the authenticated user has permission to access that object.

## Vulnerable Endpoint

GET /api/orders/:id

## Exploitation

A user with ID 100 can access another user's order:

GET /api/orders/2

## Impact

An attacker could access sensitive information from other users.

## Mitigation

Always verify ownership before returning resources.