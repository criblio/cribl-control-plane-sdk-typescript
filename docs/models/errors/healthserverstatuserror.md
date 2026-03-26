# HealthServerStatusError

Health status of the Leader or Worker Node.

## Example Usage

```typescript
import { HealthServerStatusError } from "cribl-control-plane/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `role`                                                                                   | [models.Role](../../models/role.md)                                                      | :heavy_minus_sign:                                                                       | Leader Node role: <code>primary</code> or <code>standby</code>.                          |
| `startTime`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | Timestamp (in Unix time) when the Cribl process started.                                 |
| `status`                                                                                 | [models.HealthServerStatusStatus](../../models/healthserverstatusstatus.md)              | :heavy_check_mark:                                                                       | Health state: <code>healthy</code>, <code>standby</code>, or <code>shutting down</code>. |