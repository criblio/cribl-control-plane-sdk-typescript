# SystemSettingsWorkers

## Example Usage

```typescript
import { SystemSettingsWorkers } from "cribl-control-plane/models";

let value: SystemSettingsWorkers = {
  count: 744.96,
  enableHeapSnapshots: false,
  loadThrottlePerc: 4877.27,
  memory: 7224.31,
  minimum: 4539.98,
  startupMaxConns: 3279.65,
  startupThrottleTimeout: 5328.26,
  v8SingleThread: true,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `count`                  | *number*                 | :heavy_check_mark:       | N/A                      |
| `enableHeapSnapshots`    | *boolean*                | :heavy_minus_sign:       | N/A                      |
| `loadThrottlePerc`       | *number*                 | :heavy_minus_sign:       | N/A                      |
| `memory`                 | *number*                 | :heavy_check_mark:       | N/A                      |
| `minimum`                | *number*                 | :heavy_check_mark:       | N/A                      |
| `startupMaxConns`        | *number*                 | :heavy_minus_sign:       | N/A                      |
| `startupThrottleTimeout` | *number*                 | :heavy_minus_sign:       | N/A                      |
| `v8SingleThread`         | *boolean*                | :heavy_minus_sign:       | N/A                      |