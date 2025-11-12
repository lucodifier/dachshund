# Security Policy

## 🔒 Reporting a Vulnerability

We take the security of Dachshund seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### ⚠️ Please DO NOT:

- ❌ Open a public GitHub issue
- ❌ Discuss the vulnerability in public forums
- ❌ Share the vulnerability on social media

### ✅ Please DO:

1. **Email us privately** at [security@dachshund-framework.dev] or contact the maintainers directly
2. **Provide detailed information** including:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested fixes (optional)

### 📧 What to Include in Your Report

```
Subject: [SECURITY] Brief description

**Vulnerability Type:** [e.g., XSS, CSRF, Code Injection]

**Affected Version(s):** [e.g., 1.1.6, all versions]

**Description:**
[Detailed description of the vulnerability]

**Steps to Reproduce:**
1. Step one
2. Step two
3. Step three

**Impact:**
[What could an attacker do with this vulnerability?]

**Proof of Concept:**
[Code sample or link to demonstration]

**Suggested Fix:**
[Optional: Your ideas on how to fix it]

**Your Contact Info:**
[Email, GitHub username, etc.]
```

## 🕐 Response Timeline

- **Initial Response:** Within 48 hours
- **Status Update:** Within 7 days
- **Fix Timeline:** Depends on severity (1-30 days)
- **Public Disclosure:** After fix is released and users have had time to update

## 🎖️ Recognition

We appreciate responsible disclosure! If you report a valid security vulnerability:

- ✅ You will be credited in the security advisory (unless you prefer to remain anonymous)
- ✅ Your name will be added to our Security Hall of Fame
- ✅ We'll send you a thank you message and Dachshund stickers (if you want them!)

## 🛡️ Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.1.x   | ✅ Yes            |
| 1.0.x   | ✅ Yes            |
| < 1.0   | ❌ No             |

We provide security updates for:
- The latest major version
- The previous major version (for 6 months after new major release)

## 🔍 Known Security Considerations

### Client-Side Framework

Dachshund is a client-side framework. This means:

1. **No Server-Side Secrets**
   - Never put API keys, passwords, or secrets in your client code
   - Use environment variables only for PUBLIC configuration (API URLs, etc.)
   - Sensitive operations should happen in your backend

   ```jsx
   // ❌ NEVER DO THIS
   const API_KEY = "sk_live_secret123"; // Exposed to users!
   
   // ✅ DO THIS INSTEAD
   // Backend handles authentication
   fetch('/api/protected', {
     credentials: 'include' // Cookies managed by backend
   });
   ```

2. **XSS (Cross-Site Scripting)**
   - React escapes content by default (good!)
   - Be careful with `dangerouslySetInnerHTML`
   - Sanitize user input before rendering

   ```jsx
   // ❌ DANGEROUS
   <div dangerouslySetInnerHTML={{ __html: userInput }} />
   
   // ✅ SAFE
   import DOMPurify from 'dompurify';
   <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />
   ```

3. **Route Guards**
   - Client-side guards are not security boundaries!
   - Always validate permissions on your backend
   - Client guards are for UX, not security

   ```jsx
   // Client-side guard (UX only)
   const authGuard = (route, app) => {
     if (!isLoggedIn()) {
       app.navigate('/login');
       return false;
     }
     return true;
   };
   
   // Backend MUST also check (security)
   app.get('/api/protected', requireAuth, (req, res) => {
     // Real security check
   });
   ```

4. **Dependencies**
   - We regularly update dependencies
   - Use `npm audit` to check your project
   - Keep Dachshund updated to latest version

## 🔐 Security Best Practices

When using Dachshund in production:

### 1. Content Security Policy (CSP)

Add CSP headers to your hosting:

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
```

### 2. HTTPS Only

Always serve your app over HTTPS:

```js
// In your backend or CDN config
if (req.headers['x-forwarded-proto'] !== 'https') {
  res.redirect(`https://${req.headers.host}${req.url}`);
}
```

### 3. Environment Variables

Use `.env` files properly:

```bash
# .env (local development)
VITE_API_URL=http://localhost:3000

# .env.production (production - public values only!)
VITE_API_URL=https://api.production.com
```

**Never commit:**
- API secrets
- Database credentials
- Authentication tokens

### 4. API Security

When integrating with backends:

```jsx
// ✅ Use httpOnly cookies for auth
const response = await fetch('/api/login', {
  method: 'POST',
  credentials: 'include', // Send cookies
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});

// ❌ Don't store JWT in localStorage (XSS vulnerability)
localStorage.setItem('token', jwt); // Vulnerable!
```

### 5. Dependency Security

Keep dependencies updated:

```bash
# Check for vulnerabilities
npm audit

# Update dependencies
npm update

# Update Dachshund
npm install @dachshund_framework/core@latest
```

### 6. Input Validation

Always validate user input:

```jsx
// ✅ Validate before using
const sanitizedUrl = url.trim().toLowerCase();
if (!/^https?:\/\/.+/.test(sanitizedUrl)) {
  throw new Error('Invalid URL');
}

// ✅ Sanitize HTML
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(dirty);
```

## 🚨 Past Security Issues

We will document any past security issues here (none so far! 🎉).

## 📚 Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Security Best Practices](https://react.dev/learn/security)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [npm Security Best Practices](https://docs.npmjs.com/security-best-practices)

## ✅ Security Checklist for Your App

Before deploying to production:

- [ ] All secrets are in backend, not frontend
- [ ] HTTPS is enforced
- [ ] CSP headers are configured
- [ ] Authentication uses httpOnly cookies
- [ ] Input validation is implemented
- [ ] Dependencies are up to date (`npm audit`)
- [ ] Backend validates all permissions
- [ ] Error messages don't leak sensitive info
- [ ] Rate limiting is in place (backend)
- [ ] Logging doesn't include sensitive data

## 💬 Questions?

If you have security questions (not reporting a vulnerability):

- Open a GitHub Discussion
- Email [security@dachshund-framework.dev]
- Check the documentation

---

**Thank you for helping keep Dachshund and its users safe! 🔒🐕**

