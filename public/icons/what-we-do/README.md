# SVG icons for "What We Do" section (homepage)

Put your **static SVG icon files** in this folder. The section expects these filenames:

| File name        | Service card              |
|------------------|---------------------------|
| design.svg       | Design & Creative         |
| advertising.svg  | Advertising               |
| development.svg  | Development               |
| strategy.svg     | Strategy & Management     |

- Use **.svg** format.
- Suggested size: about **48×48 px** (or square) so they look sharp at 28×28 px display size.
- If a file is missing, the section shows the service number (1–4) as fallback.

To use different paths or names, edit the `services` array in `src/components/home/ServicesSection.tsx` and set each `icon` to your path, e.g. `"/icons/what-we-do/design.svg"`.
