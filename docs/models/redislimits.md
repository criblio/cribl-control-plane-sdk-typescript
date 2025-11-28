# RedisLimits

## Example Usage

```typescript
import { RedisLimits } from "cribl-control-plane/models";

let value: RedisLimits = {
  connections: {
    disabled: true,
    maxConnections: 9453.02,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `connections`                                                      | [models.RedisConnectionLimits](../models/redisconnectionlimits.md) | :heavy_check_mark:                                                 | N/A                                                                |