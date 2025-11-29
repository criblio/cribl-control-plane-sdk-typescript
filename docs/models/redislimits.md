# RedisLimits

## Example Usage

```typescript
import { RedisLimits } from "cribl-control-plane/models";

let value: RedisLimits = {
  connections: {
    disabled: false,
    maxConnections: 9484.43,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `connections`                                                      | [models.RedisConnectionLimits](../models/redisconnectionlimits.md) | :heavy_check_mark:                                                 | N/A                                                                |