# cribl-control-plane Examples

This directory contains example scripts that demonstrate how to use the cribl-control-plane SDK.

## Prerequisites

- Node.js (v18 or higher)
- npm

## Setup

1. Copy `.env.template` to `.env`:
   ```bash
   cp .env.template .env
   ```

2. Open `.env`, replace the placeholder values with your credentials, and save.

## Run the Examples

To run an example file from the `examples` directory:

```bash
npm run build && npx tsx example-onprem-auth.ts
```

