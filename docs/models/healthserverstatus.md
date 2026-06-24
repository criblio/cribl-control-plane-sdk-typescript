# HealthServerStatus

Health status of the Leader or Worker Node.

## Example Usage

```typescript
import { HealthServerStatus } from "cribl-control-plane/models";

let value: HealthServerStatus = {
  overlay: {
    state: "inactive",
  },
  startTime: 441346,
  status: "shutting down",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `overlay`                                                                                | *models.HealthOverlayStatus*                                                             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `role`                                                                                   | [models.Role](../models/role.md)                                                         | :heavy_minus_sign:                                                                       | Leader Node role: <code>primary</code> or <code>standby</code>.                          |
| `startTime`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | Timestamp (in Unix time) when the Cribl process started.                                 |
| `status`                                                                                 | [models.HealthServerStatusStatus](../models/healthserverstatusstatus.md)                 | :heavy_check_mark:                                                                       | Health state: <code>healthy</code>, <code>standby</code>, or <code>shutting down</code>. |