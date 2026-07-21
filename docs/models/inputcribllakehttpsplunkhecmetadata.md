# InputCriblLakeHttpSplunkHecMetadata

## Example Usage

```typescript
import { InputCriblLakeHttpSplunkHecMetadata } from "cribl-control-plane/models";

let value: InputCriblLakeHttpSplunkHecMetadata = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `enabled`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | When enabled, the token value is available on events as __hecToken |
| `defaultDataset`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `allowedIndexesAtToken`                                            | *string*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |