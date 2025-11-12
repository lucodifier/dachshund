# Pull Request

## 📝 Description

Brief description of what this PR does and why.

## 🔗 Related Issues

Closes #(issue number)
Related to #(issue number)

## 🎯 Type of Change

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📝 Documentation update
- [ ] 🎨 Code style update (formatting, renaming)
- [ ] ♻️ Code refactoring (no functional changes)
- [ ] ⚡ Performance improvement
- [ ] ✅ Test update
- [ ] 🔧 Build configuration change
- [ ] 🔨 Development tooling change

## 🧪 How Has This Been Tested?

Describe the tests you ran and how to reproduce them.

- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing in example project
- [ ] Tested in multiple browsers (if applicable)

**Test Configuration:**
- Node.js version: [e.g., 18.17.0]
- npm version: [e.g., 9.8.0]
- OS: [e.g., macOS 13.4]

## 📸 Screenshots (if applicable)

Add screenshots or GIFs to demonstrate the changes.

## 📋 Checklist

### Code Quality
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] My changes generate no new warnings or errors

### Testing
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] I have tested in a real project using `npm link`

### Documentation
- [ ] I have updated the documentation (README, API docs, etc.)
- [ ] I have added/updated JSDoc comments for public APIs
- [ ] I have updated the CHANGELOG.md (if applicable)

### Build
- [ ] My changes build successfully (`npm run build`)
- [ ] The bundle size has not significantly increased (check `dist/` folder)
- [ ] All dependencies are properly declared in `package.json`

### Commits
- [ ] My commits follow the [Conventional Commits](https://www.conventionalcommits.org/) specification
- [ ] Each commit is atomic and has a clear purpose

## 💭 Additional Context

Add any other context about the PR here.

### Breaking Changes (if applicable)

If this is a breaking change, describe:

1. **What breaks:**
   - [e.g., `route()` signature changed]

2. **Migration path:**
   ```jsx
   // Before
   app.route('/', Home, seo);
   
   // After
   app.route('/', Home, seo, { guards: [] });
   ```

3. **Why is this necessary:**
   - [Explanation of why breaking change is needed]

## 📊 Performance Impact (if applicable)

If this PR affects performance:

- **Bundle size:** Before: XXkb → After: XXkb
- **Build time:** Before: XXs → After: XXs
- **Benchmarks:** [Add benchmark results if relevant]

## 🔄 Dependencies

Does this PR add, update, or remove dependencies?

- [ ] No dependencies changed
- [ ] Dependencies added: [list]
- [ ] Dependencies updated: [list]
- [ ] Dependencies removed: [list]

## 🚀 Deployment Notes

Any special considerations for deploying this change?

- [ ] No special considerations
- [ ] Requires documentation update on website
- [ ] Requires announcement to users
- [ ] Requires version bump (major/minor/patch)

## 👀 Reviewers

Tag specific reviewers if needed: @username

## 🙏 Thanks

Thank you for contributing to Dachshund! 🐕✨

