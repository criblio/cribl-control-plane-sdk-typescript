# SplunkHecMetadata

## Example Usage

```typescript
import { SplunkHecMetadata } from "cribl-control-plane/models";

let value: SplunkHecMetadata = {
  enabled: false,
  defaultDataset: "<value>",
  allowedIndexesAtToken: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `enabled`               | *boolean*               | :heavy_minus_sign:      | N/A                     |
| `defaultDataset`        | *string*                | :heavy_minus_sign:      | N/A                     |
| `allowedIndexesAtToken` | *string*[]              | :heavy_minus_sign:      | N/A                     |