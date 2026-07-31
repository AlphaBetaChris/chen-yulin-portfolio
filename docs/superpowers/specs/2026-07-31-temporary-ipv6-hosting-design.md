# Temporary IPv6 Hosting Design

## Goal

Serve the portfolio temporarily from the current Mac over its stable global IPv6
address, with English shown whenever a page is newly loaded.

## Language Behavior

- Initialize the React locale to English on every page load.
- Keep the existing Chinese/English toggle working for the current page session.
- Do not restore a previously selected language from `localStorage`.
- Set the static document language and metadata defaults in `index.html` to English
  so the initial HTML matches the rendered application.
- Update locale tests to cover the new default and refresh behavior.

## Hosting

- Build the existing Vite application for production.
- Run Vite's preview server on IPv6 wildcard address `::` and port `4173`.
- Use the stable global address
  `240e:398:53f0:b0:f4:22a7:bee3:1bbf`, not the temporary privacy address.
- Publish the direct URL as
  `http://[240e:398:53f0:b0:f4:22a7:bee3:1bbf]:4173/`.

## Validation

- Run the locale tests, typecheck, and production build.
- Verify that the preview process listens on IPv6 port `4173`.
- Verify the built page responds through the bracketed IPv6 URL from the Mac.
- Attempt an independent external request when tooling permits.

## Operational Constraints

- The URL is available only while the Mac is awake, connected to the same network,
  and the preview process is running.
- macOS firewall or router IPv6 ingress policy may block external clients even when
  local IPv6 access succeeds.
- Stop the temporary server with `Ctrl+C` or by terminating its preview process.
