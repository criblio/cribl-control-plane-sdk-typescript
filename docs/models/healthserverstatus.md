# HealthServerStatus

## Example Usage

```typescript
import { HealthServerStatus } from "cribl-control-plane/models";

let value: HealthServerStatus = {
  startTime: 8907.15,
  status: "healthy",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `role`                                                                   | [models.Role](../models/role.md)                                         | :heavy_minus_sign:                                                       | N/A                                                                      |
| `startTime`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `status`                                                                 | [models.HealthServerStatusStatus](../models/healthserverstatusstatus.md) | :heavy_check_mark:                                                       | N/A                                                                      |