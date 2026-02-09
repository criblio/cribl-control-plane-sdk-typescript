# WorkersTypeSystemSettingsConf

## Example Usage

```typescript
import { WorkersTypeSystemSettingsConf } from "cribl-control-plane/models";

let value: WorkersTypeSystemSettingsConf = {
  count: 7178.32,
  memory: 6551.28,
  minimum: 9602.87,
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