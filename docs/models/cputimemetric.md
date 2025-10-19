# CPUTimeMetric

## Example Usage

```typescript
import { CPUTimeMetric } from "cribl-control-plane/models";

let value: CPUTimeMetric = {
  billableCPUSeconds: 1412.06,
  executorsCPUSeconds: {},
  totalCPUSeconds: 3364.44,
  totalExecCPUSeconds: 6730.42,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `billableCPUSeconds`     | *number*                 | :heavy_minus_sign:       | N/A                      |
| `executorsCPUSeconds`    | Record<string, *number*> | :heavy_check_mark:       | N/A                      |
| `totalCPUSeconds`        | *number*                 | :heavy_check_mark:       | N/A                      |
| `totalExecCPUSeconds`    | *number*                 | :heavy_check_mark:       | N/A                      |