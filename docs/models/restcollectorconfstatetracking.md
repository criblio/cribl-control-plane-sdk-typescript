# RestCollectorConfStateTracking

## Example Usage

```typescript
import { RestCollectorConfStateTracking } from "cribl-control-plane/models";

let value: RestCollectorConfStateTracking = {
  enabled: false,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `enabled`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | Track collection progress between consecutive scheduled executions |