# HealthStatus

## Example Usage

```typescript
import { HealthStatus } from "cribl-control-plane/models";

let value: HealthStatus = {
  role: "primary",
  status: "shutting down",
  startTime: 3159.13,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `role`                                                       | [models.Role](../models/role.md)                             | :heavy_minus_sign:                                           | N/A                                                          |
| `status`                                                     | [models.HealthStatusStatus](../models/healthstatusstatus.md) | :heavy_check_mark:                                           | N/A                                                          |
| `startTime`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |