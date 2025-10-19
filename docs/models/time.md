# Time

## Example Usage

```typescript
import { Time } from "cribl-control-plane/models";

let value: Time = {
  queuedSec: 4987.66,
  runningSec: 1991.68,
  taskCompletionTotalSec: 8593.11,
  taskReceivingTotalSec: 2304.41,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `queuedSec`              | *number*                 | :heavy_check_mark:       | N/A                      |
| `runningSec`             | *number*                 | :heavy_check_mark:       | N/A                      |
| `taskCompletionTotalSec` | *number*                 | :heavy_check_mark:       | N/A                      |
| `taskReceivingTotalSec`  | *number*                 | :heavy_check_mark:       | N/A                      |