# Jagrut Apang Sanghatana website

Responsive informational website for Jagrut Apang Sanghatana / Mahatma Phule Apang Prashikshan Kendra. Built with React, TypeScript, Vite and React Router.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it with `npm run preview`.

## Content updates

The organisation address, hours, course list and management committee are maintained in `src/data.ts`. Keep cumulative achievement figures described as historical, since inception; do not recast them as annual results.

### Images

Place approved local organisation images under `public/assets/`. The organisation logo is stored at `public/assets/ngo-logo.png` and is used in the header and footer. Replace that file to update the logo site-wide. The current hero uses a locally stored illustration and is labeled as illustrative, not a photograph of the organisation. Replace it only with approved photography and appropriate permissions. The six supplied organisation photographs are stored under `public/assets/gallery/` and listed with captions, categories and alt text in `src/data.ts`. Replace or extend these files and records to update the gallery. Provide concise descriptive alt text and retain keyboard accessible gallery controls.

## Forms

Admission and contact forms perform browser-side required-field and format validation only. The success state clearly reports that nothing was sent. To receive submissions, connect a secure backend or approved email service, add server-side validation and spam protection, and publish a privacy notice. Never imply a message has been delivered until the integration is operational. Do not add medical data fields.

## Verification notes

Names and designations in the committee list are transcribed from the supplied project brief; spellings such as “Kambleomkar” and “Hardeh” should be verified with the organisation before publication. No personal addresses, ages, PAN, email, telephone number, social account, registration identifier, payment details or donation account have been fabricated.

Address, hours, course durations/eligibility and facility details reflect the supplied brief. Confirm that they remain current with the organisation before public deployment.


