# HealthCountType

## Example Usage

```typescript
import { HealthCountType } from "cribl-control-plane/models";

let value: HealthCountType = {
  Green: 814759,
  Red: 110538,
  Unknown: 709945,
  Yellow: 671192,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `green`                                                          | *number*                                                         | :heavy_check_mark:                                               | Number of Worker Processes reporting a healthy (Green) status.   |
| `red`                                                            | *number*                                                         | :heavy_check_mark:                                               | Number of Worker Processes reporting a critical (Red) status.    |
| `unknown`                                                        | *number*                                                         | :heavy_check_mark:                                               | Number of Worker Processes reporting an unknown health status.   |
| `yellow`                                                         | *number*                                                         | :heavy_check_mark:                                               | Number of Worker Processes reporting a degraded (Yellow) status. |