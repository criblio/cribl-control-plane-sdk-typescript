# HealthCountType

## Example Usage

```typescript
import { HealthCountType } from "cribl-control-plane/models";

let value: HealthCountType = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `green`                                                          | *number*                                                         | :heavy_minus_sign:                                               | Number of Worker Processes reporting a healthy (Green) status.   |
| `red`                                                            | *number*                                                         | :heavy_minus_sign:                                               | Number of Worker Processes reporting a critical (Red) status.    |
| `unknown`                                                        | *number*                                                         | :heavy_minus_sign:                                               | Number of Worker Processes reporting an unknown health status.   |
| `yellow`                                                         | *number*                                                         | :heavy_minus_sign:                                               | Number of Worker Processes reporting a degraded (Yellow) status. |