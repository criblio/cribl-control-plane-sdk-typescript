# InputS3InventoryCheckpointing

## Example Usage

```typescript
import { InputS3InventoryCheckpointing } from "cribl-control-plane/models/operations";

let value: InputS3InventoryCheckpointing = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                          | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Resume processing files after an interruption                                                                                      |
| `retries`                                                                                                                          | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The number of times to retry processing when a processing error occurs. If Skip file on error is enabled, this setting is ignored. |