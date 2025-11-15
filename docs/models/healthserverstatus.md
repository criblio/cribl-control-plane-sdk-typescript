# HealthServerStatus

## Example Usage

```typescript
import { HealthServerStatus } from "cribl-control-plane/models";

let value: HealthServerStatus = {
  role: "primary",
  startTime: 4413.46,
  status: "healthy",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `role`                               | [models.Role](../models/role.md)     | :heavy_minus_sign:                   | N/A                                  |
| `startTime`                          | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `status`                             | [models.Status](../models/status.md) | :heavy_check_mark:                   | N/A                                  |