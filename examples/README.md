# cribl-control-plane Examples

This directory contains example scripts demonstrating how to use the cribl-control-plane SDK.

## Prerequisites

- Node.js (v18 or higher)
- npm

## Setup

1. Copy `.env.template` to `.env`:
   ```bash
   cp .env.template .env
   ```

2. Edit `.env` and add your actual credentials (API keys, tokens, etc.)

## Running the Examples

To run an example file from the examples directory:

Running Cribl Stream example
```bash
npm run build && npx tsx example-stream.ts
```

Running Cribl Edge example
```bash
npm run build && npx tsx example-edge.ts
```

## Creating new examples

Duplicate an existing example file, they won't be overwritten by the generation process.


