---
layout: ../layouts/MarkdownPageLayout.astro
title: "Security | Primero AI"
description: "Overview of Primero AI security practices and technical safeguards."
---

# Security

**Last updated:** January 27, 2026  
**Owner:** Security & Engineering

## Overview
This page summarizes how Primero AI protects customer data and systems based on our platform implementation and operating practices.

## Data protection & encryption
- **Application-layer encryption for sensitive configs.** Connection configuration and other secrets are encrypted before storage using AES-256-GCM with a key derived via scrypt from `RESOURCE_CONFIG_SECRET`.  
- **Token secret protection.** Agent token secrets are encrypted at rest and validated using constant‑time comparison to reduce timing attacks.  
- **Third‑party credentials protection.** GitHub tokens and app secrets are stored in encrypted form, and decrypted only when needed.

## Access control
- **Authenticated access.** Protected API procedures require an authenticated session before execution.  
- **Organization scoping.** Resource and analysis access checks enforce organization ownership boundaries.  
- **Role-based permissions.** Admin- and super‑admin‑only procedures are gated by role checks.

## Storage & file access
- **Object storage with signed URLs.** Files stored in object storage are accessed via short‑lived signed URLs (5‑minute default) to limit exposure.  
- **Server-side access checks.** Storage access is mediated by the API and returns explicit error codes for missing or unauthorized objects.

## Query safety controls
- **Read-only SQL enforcement.** SQL generation and execution is constrained to `SELECT` statements and rejects DDL/DML, multiple statements, and known dangerous patterns.

## Secure development & validation
- **Schema-validated inputs.** API inputs are validated via shared schemas to reduce malformed or unsafe requests.  
- **Consistent error handling.** Authorization failures return standardized error codes without leaking sensitive details.

## Incident response & vulnerability reporting
If you believe you have found a security issue, please report it via our [Vulnerability Disclosure](/vulnerability-disclosure) page or contact us through the [Contact](/#contact) form.

## Compliance
If you require specific compliance documentation (e.g., SOC 2, ISO 27001, GDPR), contact us and we will share the latest materials available.
