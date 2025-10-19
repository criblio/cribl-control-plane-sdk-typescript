# SearchAuditMetrics

## Example Usage

```typescript
import { SearchAuditMetrics } from "cribl-control-plane/models";

let value: SearchAuditMetrics = {
  bytesIn: 5792.25,
  bytesOut: 1565.06,
  eventsIn: 1093.62,
  eventsOut: 1090.04,
  objects: {
    discovered: 1725.61,
    scanned: 7271.86,
    skipped: 2277.13,
  },
  tasks: {
    largeFileTaskCount: 7980.85,
    standardTaskCount: 1822.9,
  },
  time: {
    queuedSec: 3480.65,
    runningSec: 5360.85,
    taskCompletionTotalSec: 9502.28,
    taskReceivingTotalSec: 3415.63,
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `bytesIn`                              | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `bytesOut`                             | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `eventsIn`                             | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `eventsOut`                            | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `objects`                              | [models.Objects](../models/objects.md) | :heavy_check_mark:                     | N/A                                    |
| `tasks`                                | [models.Tasks](../models/tasks.md)     | :heavy_minus_sign:                     | N/A                                    |
| `time`                                 | [models.Time](../models/time.md)       | :heavy_check_mark:                     | N/A                                    |