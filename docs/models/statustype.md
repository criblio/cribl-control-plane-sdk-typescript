# StatusType

Runtime status: health, metrics, and optional persistent-queue info. Fields may be absent when data is unavailable.

## Example Usage

```typescript
import { StatusType } from "cribl-control-plane/models";

let value: StatusType = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `error`                                                                | [models.StatusError](../models/statuserror.md)                         | :heavy_minus_sign:                                                     | N/A                                                                    |
| `health`                                                               | [models.HealthOptionsStatus](../models/healthoptionsstatus.md)         | :heavy_minus_sign:                                                     | Overall health status of the Source or Destination.                    |
| `metrics`                                                              | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | Metrics data for the Source or Destination.                            |
| `pq`                                                                   | [models.WorkerPQStatus](../models/workerpqstatus.md)                   | :heavy_minus_sign:                                                     | N/A                                                                    |
| `timestamp`                                                            | *number*                                                               | :heavy_minus_sign:                                                     | Timestamp (in Unix time) when the status was last updated.             |
| `useStatusFromLB`                                                      | *boolean*                                                              | :heavy_minus_sign:                                                     | Set to prefer status from the LB process, not from the worker process. |