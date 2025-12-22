# StateTrackingRest

## Example Usage

```typescript
import { StateTrackingRest } from "cribl-control-plane/models";

let value: StateTrackingRest = {
  enabled: false,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `enabled`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | Track collection progress between consecutive scheduled executions |