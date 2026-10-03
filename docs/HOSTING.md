# Browser hosting

Play: https://armmanas7.github.io/AI-Game-Omni/

The repository and game are public. Players do not need a GitHub account, access invitation, or installation. Send the URL directly or encode it as a QR code. Open in a current browser; Chrome is recommended for initial testing. Phones automatically receive touch controls; landscape is recommended. Controls can also be selected in Settings. English and Simplified Chinese are available. Saves remain in each device/browser and are not synchronized; export/import can transfer an expedition.

## Publishing updates

Pushing to main runs .github/workflows/pages.yml: npm ci, 97 system checks, a typechecked Vite build, and GitHub Pages deployment. A failed build does not publish. GitHub Pages must remain configured to use GitHub Actions. Relative build paths and import.meta.env.BASE_URL for atlas portraits support the project URL and local servers. No runtime backend or secret API key is used.

## Verification

Local subdirectory smoke checks: docs/hosting-local-check.json. Public-site checks: docs/hosting-public-check.json. Both passed all six desktop/phone cases. Share QR: screenshots/vesper-play-qr.png (SVG available alongside it). Repeat against the public site with VESPER_TEST_URL and VESPER_TEST_REPORT environment variables and node tools/verify-hosting.mjs. It checks fresh browser access, desktop/touch adaptation, both languages, first scan, atlas portrait loading, saved progress, missing assets, and page errors in Chromium and WebKit. Mobile checks are browser emulations; physical phones are not yet tested.
