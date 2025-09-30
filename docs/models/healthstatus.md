# HealthStatus

## Example Usage

```typescript
import { HealthStatus } from "cribl-control-plane/models";

let value: HealthStatus = {
  role: "primary",
  status: "shutting down",
  startTime: 3284.05,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `role`                               | [models.Role](../models/role.md)     | :heavy_minus_sign:                   | N/A                                  |
| `status`                             | [models.Status](../models/status.md) | :heavy_check_mark:                   | N/A                                  |
| `startTime`                          | *number*                             | :heavy_check_mark:                   | N/A                                  |