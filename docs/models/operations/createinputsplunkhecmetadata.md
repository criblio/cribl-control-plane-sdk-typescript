# CreateInputSplunkHecMetadata

## Example Usage

```typescript
import { CreateInputSplunkHecMetadata } from "cribl-control-plane/models/operations";

let value: CreateInputSplunkHecMetadata = {
  enabled: true,
  defaultDataset: "<value>",
  allowedIndexesAtToken: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `enabled`               | *boolean*               | :heavy_minus_sign:      | N/A                     |
| `defaultDataset`        | *string*                | :heavy_minus_sign:      | N/A                     |
| `allowedIndexesAtToken` | *string*[]              | :heavy_minus_sign:      | N/A                     |