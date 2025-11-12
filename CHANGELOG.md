# Changelog

All notable changes to Dachshund will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Contributing guidelines (CONTRIBUTING.md)
- Code of Conduct (CODE_OF_CONDUCT.md)
- Security policy (SECURITY.md)
- Issue templates (bug report, feature request, documentation)
- Pull request template
- Corporate analysis documentation

## [1.1.6] - 2024-XX-XX

### Added
- CLI alias `dachshund_framework` for creating projects
- Improved documentation with Portuguese translation

### Fixed
- Router regex pattern for dynamic routes
- SEO meta tags update on navigation

### Changed
- Optimized bundle size (now ~5kb gzipped)

## [1.1.0] - 2024-XX-XX

### Added
- Static Site Generation (SSG) support
- SEO meta tags injection at build time
- `useSEO` hook for dynamic meta tag updates
- `useParams` hook for accessing route parameters
- `useNavigate` hook for programmatic navigation
- Automatic Open Graph and Twitter Card generation
- JSON-LD structured data support

### Changed
- Improved routing performance
- Better error messages
- Updated documentation

## [1.0.0] - 2024-XX-XX

### Added
- Initial release 🎉
- Client-side routing with dynamic parameters
- SPA navigation with History API
- SEO Manager for meta tags
- React 18 support
- Vite integration
- CLI tool for project creation (`create-dachshund`)
- Blog template
- MIT License

### Core Features
- Zero-config setup
- ~5kb bundle size
- Perfect SEO without SSR
- Deploy anywhere (CDN-friendly)
- Hot Module Replacement support

---

## Release Types

### Major (X.0.0)
Breaking changes that require user action to upgrade.

### Minor (x.X.0)
New features that are backward compatible.

### Patch (x.x.X)
Bug fixes and minor improvements.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to suggest changes and additions to this changelog.

---

[Unreleased]: https://github.com/lucodifier/dachshund/compare/v1.1.6...HEAD
[1.1.6]: https://github.com/lucodifier/dachshund/compare/v1.1.0...v1.1.6
[1.1.0]: https://github.com/lucodifier/dachshund/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/lucodifier/dachshund/releases/tag/v1.0.0

