# Carbon Credit Dashboard

A web application to track, view, and manage carbon credits. Designed to provide transparency and easy access to carbon credit information, the dashboard allows companies and users to monitor credits and download retirement certificates as proof of carbon offset.

## Features

- Display a list of carbon credits with essential details:
  - UNIC ID(unique identifier)
  - Project Name
  - Vintage (year)
  - Status (Active / Retired)
- Search and filter credits by project name or vintage.
- Download retirement certificates in PDF format for retired credits.
- Clean and responsive UI built with **React** and **Tailwind CSS**.
- Optimized for large datasets with efficient rendering.



Q1. How did you decide what to show on the main page vs details?

On the main page, I chose to show only the most essential information that users need at a glance:
UNIC ID – unique identifier for each credit
Project Name – to identify the type of project
Vintage – year of issuance
Status – Active or Retired
I avoided showing all certificate details on the main page to keep it clean and readable.
Details such as the full certificate, issued date, and authorized signature are available via the “Download Retirement Certificate” action. This keeps the main table concise and prevents information overload while still giving access to all data when needed.

Q2. What design choices did you make to keep it clean?

Minimal columns: Only essential columns on the main table.
Status badges: Used green/gray badges for Active/Retired to give instant visual cues without reading full text.
Search bar: A single input allows users to filter by project name or vintage, reducing the need for extra filters.
Consistent spacing and alignment: Tailwind CSS was used for padding, spacing, and typography to ensure readability.
Hidden certificate templates: Certificates are generated dynamically and not cluttering the DOM.
Action column: Buttons only appear when necessary (e.g., “Download” for Retired credits) to reduce visual noise.

Q3. If the system had 10,000 credits, how would you keep the dashboard fast?

Pagination: Instead of rendering all 10,000 rows at once, only render a subset per page.
Server-side filtering & search: Send queries to the backend to retrieve only relevant results.
Memoization: Use useMemo to avoid unnecessary re-renders of the table and rows.
Lazy loading certificates:  Generate certificates  on demand when the user clicks “Download.”
Efficient data structures: Keep credit data in arrays or maps optimized for search and filtering.
