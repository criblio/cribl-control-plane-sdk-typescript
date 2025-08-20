# RedisCacheLimits

## Example Usage

```typescript
import { RedisCacheLimits } from "cribl-control-plane/models";

let value: RedisCacheLimits = {
  clientTrackingMechanism: "<value>",
  enableServerAssist: false,
  keyTTLSecs: 4505.78,
  maxCacheSize: 283.14,
  maxNumKeys: 9264.4,
  servicePeriodSecs: 4688.01,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `clientTrackingMechanism` | *string*                  | :heavy_minus_sign:        | N/A                       |
| `enableServerAssist`      | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `keyTTLSecs`              | *number*                  | :heavy_minus_sign:        | N/A                       |
| `maxCacheSize`            | *number*                  | :heavy_minus_sign:        | N/A                       |
| `maxNumKeys`              | *number*                  | :heavy_minus_sign:        | N/A                       |
| `servicePeriodSecs`       | *number*                  | :heavy_minus_sign:        | N/A                       |