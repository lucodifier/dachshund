# 🤝 Contributing to Dachshund

First off, thank you for considering contributing to Dachshund! 🐕

It's people like you that make Dachshund such a great tool. We welcome contributions from everyone, whether it's:

- 🐛 Reporting a bug
- 💡 Proposing new features
- 📝 Improving documentation
- 🔧 Submitting a fix
- 💻 Adding new features
- ✅ Writing tests

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of:
- Age
- Body size
- Disability
- Ethnicity
- Gender identity
- Level of experience
- Nationality
- Personal appearance
- Race
- Religion
- Sexual identity and orientation

### Our Standards

**Examples of behavior that contributes to a positive environment:**
- ✅ Using welcoming and inclusive language
- ✅ Being respectful of differing viewpoints
- ✅ Gracefully accepting constructive criticism
- ✅ Focusing on what is best for the community
- ✅ Showing empathy towards other community members

**Examples of unacceptable behavior:**
- ❌ Trolling, insulting/derogatory comments, and personal attacks
- ❌ Public or private harassment
- ❌ Publishing others' private information without permission
- ❌ Other conduct which could reasonably be considered inappropriate

---

## 🚀 Getting Started

### Prerequisites

Before contributing, make sure you have:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Git**
- A code editor (we recommend VS Code)

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:

```bash
git clone https://github.com/YOUR_USERNAME/dachshund.git
cd dachshund
```

3. Add upstream remote:

```bash
git remote add upstream https://github.com/lucodifier/dachshund.git
```

### Install Dependencies

```bash
npm install
```

### Verify Setup

```bash
# Run tests
npm test

# Build the project
npm run build

# Test locally
npm run test:local
```

---

## 💡 How Can I Contribute?

### 🐛 Reporting Bugs

Bugs are tracked as [GitHub issues](https://github.com/lucodifier/dachshund/issues).

**Before creating a bug report:**
- Check the [existing issues](https://github.com/lucodifier/dachshund/issues) to avoid duplicates
- Check the [documentation](https://lucodifier.github.io/dachshund-landing/) to see if it's a known limitation

**When creating a bug report, include:**

- **Clear and descriptive title**
- **Steps to reproduce** the behavior
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Environment details:**
  - Dachshund version
  - Node.js version
  - Operating system
  - Browser (if applicable)
- **Code sample** or repository demonstrating the issue

**Example:**

```markdown
## Bug: SEO meta tags not updating on navigation

**Environment:**
- Dachshund: 1.1.6
- Node.js: 18.17.0
- OS: macOS 13.4
- Browser: Chrome 115

**Steps to Reproduce:**
1. Navigate to `/page1`
2. Click link to `/page2`
3. Inspect `<head>` element
4. Meta tags still show `/page1` data

**Expected:** Meta tags should update to `/page2` data
**Actual:** Meta tags remain from `/page1`

**Code Sample:**
[Link to CodeSandbox or minimal reproduction]
```

### 💡 Suggesting Features

Feature requests are also tracked as [GitHub issues](https://github.com/lucodifier/dachshund/issues).

**Before suggesting a feature:**
- Check if it's already been suggested
- Consider if it aligns with Dachshund's philosophy of simplicity

**When suggesting a feature, include:**

- **Clear and descriptive title**
- **Problem statement:** What problem does this solve?
- **Proposed solution:** How should it work?
- **Alternatives considered:** What other approaches did you think of?
- **Use cases:** Real-world examples
- **Would you be willing to implement it?**

**Example:**

```markdown
## Feature: Middleware/Guard System

**Problem:**
Currently, implementing route guards requires manual wrapping:
```jsx
app.route('/', (props) => requireAuth(props, () => <Dashboard />));
```

**Proposed Solution:**
Native guard/middleware support:
```jsx
app.guard(authGuard);
app.route('/', Dashboard, { guards: [adminGuard] });
```

**Alternatives:**
- Higher-order components
- Context-based guards
- Keep as-is (manual)

**Use Cases:**
- Authentication/authorization
- Analytics tracking
- Error boundaries
- Logging

**Implementation:** I'm willing to submit a PR if this is approved.
```

### 📝 Improving Documentation

Documentation improvements are always welcome!

**Types of documentation:**
- API documentation
- Tutorial improvements
- Translation to other languages
- Example projects
- Blog posts and guides

**How to contribute:**
- Documentation lives in the main repo and the [landing page repo](https://github.com/lucodifier/dachshund-landing)
- Follow the same PR process
- Ensure code examples work
- Use clear, beginner-friendly language

---

## 🛠️ Development Workflow

### Branching Strategy

We use a simple branching model:

- `main` - stable, production-ready code
- `develop` - integration branch for features
- `feature/your-feature-name` - your feature branch
- `fix/bug-description` - bug fix branch

### Creating a Feature Branch

```bash
# Update your fork
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/middleware-system

# Or for bug fixes
git checkout -b fix/seo-update-issue
```

### Development Loop

1. **Make your changes**
   ```bash
   # Edit files
   code src/core/Dachshund.js
   ```

2. **Test your changes**
   ```bash
   # Run tests
   npm test
   
   # Test locally
   npm run test:local
   
   # Build
   npm run build
   ```

3. **Commit your changes** (see [Commit Guidelines](#commit-guidelines))
   ```bash
   git add .
   git commit -m "feat: add middleware system"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/middleware-system
   ```

5. **Open a Pull Request** (see [Pull Request Process](#pull-request-process))

### Testing

We use Jest for testing. All contributions should include tests.

**Run tests:**
```bash
npm test
```

**Write tests:**
```javascript
// __tests__/Router.test.js
import Router from '../src/core/Router';

describe('Router', () => {
  let router;

  beforeEach(() => {
    router = new Router();
  });

  test('should match static routes', () => {
    router.add('/', HomePage, {});
    const route = router.match('/');
    
    expect(route).toBeDefined();
    expect(route.Component).toBe(HomePage);
  });

  test('should match dynamic routes', () => {
    router.add('/blog/:id', BlogPost, {});
    const route = router.match('/blog/hello-world');
    
    expect(route).toBeDefined();
    expect(route.params.id).toBe('hello-world');
  });
});
```

**Test coverage:**
- Aim for > 80% coverage
- Focus on critical paths
- Test edge cases
- Test error handling

### Local Testing

Test your changes in a real project:

```bash
# In dachshund repo
npm link

# In your test project
npm link @dachshund_framework/core

# Test your changes
npm run dev
```

---

## 🎨 Style Guidelines

### JavaScript Style

We use **ESLint** and **Prettier** for code formatting.

**Key principles:**
- Clear and readable code > clever code
- Explicit > implicit
- Simple > complex
- Comments for "why", not "what"

**Example:**

```javascript
// ✅ Good
function matchRoute(path) {
  // Use regex to support dynamic parameters like :id
  const pattern = this.pathToRegex(path);
  return this.routes.find(route => pattern.test(route.path));
}

// ❌ Bad
function matchRoute(p) {
  return this.routes.find(r => this.pathToRegex(p).test(r.path)); // complicated one-liner
}
```

### Code Structure

**Keep files small and focused:**
```
src/
├─ core/
│  ├─ Dachshund.js      # Main class (~100 lines)
│  ├─ Router.js         # Routing logic (~60 lines)
│  └─ SEOManager.js     # SEO management (~90 lines)
├─ hooks/
│  ├─ useNavigate.js    # Navigation hook
│  ├─ useParams.js      # Params hook
│  └─ useSEO.js         # SEO hook
└─ index.js             # Public API exports
```

**Principle:** One file = one responsibility

### Naming Conventions

- **Classes:** PascalCase (`Dachshund`, `Router`)
- **Functions:** camelCase (`navigate`, `matchRoute`)
- **Files:** Match the main export (`Dachshund.js`, `Router.js`)
- **Constants:** UPPER_SNAKE_CASE (`DEFAULT_CONFIG`)
- **Private methods:** prefix with `_` (`_internalMethod`)

### Documentation Comments

Use JSDoc for public APIs:

```javascript
/**
 * Navigate to a new route
 * @param {string} path - The path to navigate to
 * @returns {void}
 * @example
 * app.navigate('/blog');
 */
navigate(path) {
  // implementation
}
```

---

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/).

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements

### Examples

**Feature:**
```
feat(router): add middleware support

- Add guard registration
- Support route-level guards
- Support global guards
- Update documentation

Closes #123
```

**Bug Fix:**
```
fix(seo): update meta tags on navigation

Meta tags were not updating when navigating between routes.
This commit ensures SEOManager.update() is called on every render.

Fixes #456
```

**Documentation:**
```
docs(readme): add TypeScript example

Added code example showing how to use Dachshund with TypeScript.
```

**Breaking Change:**
```
feat(api)!: change route() signature

BREAKING CHANGE: route() now takes options object as 4th parameter

Before:
app.route('/', Home, seo);

After:
app.route('/', Home, seo, { guards: [] });
```

---

## 🔄 Pull Request Process

### Before Submitting

**Checklist:**
- [ ] Code follows style guidelines
- [ ] Tests pass (`npm test`)
- [ ] Build succeeds (`npm run build`)
- [ ] New tests added (if applicable)
- [ ] Documentation updated (if applicable)
- [ ] Commit messages follow guidelines
- [ ] Branch is up to date with `main`

### Submitting a PR

1. **Push your branch** to your fork

2. **Open a Pull Request** on GitHub

3. **Fill out the PR template:**

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Related Issues
Closes #123
Related to #456

## How Has This Been Tested?
- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing in example project

## Screenshots (if applicable)
[Add screenshots or GIFs]

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where needed
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix/feature works
- [ ] New and existing tests pass locally
```

### Review Process

1. **Automated checks** will run (tests, linting)
2. **Maintainers will review** your code
3. **Address feedback** if requested
4. **Approval** - maintainer approves
5. **Merge** - maintainer merges to `main`

**Review timeline:**
- Initial response: 1-3 days
- Full review: 3-7 days (depends on complexity)

### After Your PR is Merged

1. **Delete your branch:**
   ```bash
   git branch -d feature/your-feature
   git push origin --delete feature/your-feature
   ```

2. **Update your fork:**
   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```

3. **Celebrate!** 🎉 You're now a Dachshund contributor!

---

## 📚 Additional Resources

### Project Structure

```
dachshund/
├─ src/
│  ├─ core/              # Core framework code
│  ├─ hooks/             # React hooks
│  ├─ builder/           # SSG builder
│  └─ index.js           # Public API
├─ dist/                 # Built files (generated)
├─ templates/            # Project templates
├─ bin/                  # CLI scripts
├─ __tests__/            # Tests
├─ docs/                 # Documentation
├─ package.json
├─ rollup.config.mjs     # Build configuration
└─ README.md
```

### Key Files to Know

- `src/core/Dachshund.js` - Main framework class
- `src/core/Router.js` - Client-side routing
- `src/core/SEOManager.js` - SEO meta tag management
- `src/builder/SSGBuilder.js` - Static site generation
- `bin/dachshund.js` - CLI tool
- `rollup.config.mjs` - Build configuration

### Understanding the Codebase

**Dachshund is small by design:**
- Core: ~500 lines
- Total: ~1000 lines
- Easy to understand and contribute!

**Architecture:**
```
User's App
    ↓
Dachshund API (route, navigate, init)
    ↓
Router (path matching)
    ↓
SEOManager (meta tags)
    ↓
React (rendering)
```

**Build process:**
```
Development:
  Vite → Hot reload → React app

Production:
  1. Vite build → optimized bundle.js
  2. SSGBuilder → HTML files with SEO
  3. Deploy → Static files
```

### Philosophy

When contributing, keep in mind Dachshund's core principles:

1. **Simplicity First**
   - No magic, no abstractions unless necessary
   - Code should be readable by beginners

2. **Performance Matters**
   - Keep bundle size small (currently ~5kb)
   - Optimize for real-world use cases

3. **Zero Config**
   - Works out of the box
   - Sensible defaults
   - Easy to customize when needed

4. **SEO Without SSR**
   - Static generation at build time
   - No server required
   - Deploy anywhere

5. **Developer Experience**
   - Clear error messages
   - Good documentation
   - Fast feedback loop

---

## 🌟 Recognition

Contributors are recognized in several ways:

- **README.md** - Listed as contributor
- **CHANGELOG.md** - Credited in release notes
- **Release notes** - Mentioned in GitHub releases
- **Social media** - Shoutouts when appropriate

---

## 💬 Community

### Getting Help

- **GitHub Discussions:** Ask questions, share ideas
- **GitHub Issues:** Report bugs, request features
- **Discord:** [Join our server](#) (coming soon)
- **Twitter:** [@dachshund_js](#) (coming soon)

### Communication Guidelines

- **Be respectful** and constructive
- **Search first** before asking
- **Provide context** when asking questions
- **Share knowledge** when you learn something
- **Thank contributors** who help you

---

## 🙏 Thank You!

Every contribution, no matter how small, makes Dachshund better!

**Ways to contribute without code:**
- ⭐ Star the project on GitHub
- 📢 Share Dachshund with others
- 📝 Write blog posts or tutorials
- 🐛 Report bugs you encounter
- 💡 Suggest improvements
- 📚 Improve documentation
- 🌍 Translate to other languages
- 💬 Answer questions in Discussions
- ❤️ Sponsor the project

---

## 📄 License

By contributing to Dachshund, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

**Happy Contributing! 🐕✨**

Made with ❤️ by the Dachshund community

---

## 📞 Contact

- **Issues:** https://github.com/lucodifier/dachshund/issues
- **Discussions:** https://github.com/lucodifier/dachshund/discussions
- **Website:** https://lucodifier.github.io/dachshund-landing/

