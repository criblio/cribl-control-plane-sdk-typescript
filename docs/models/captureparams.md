# CaptureParams

## Example Usage

```typescript
import { CaptureParams } from "cribl-control-plane/models";

let value: CaptureParams = {
  duration: 8960.32,
  filter: "<value>",
  level: 0,
  maxEvents: 7672.93,
  stepDuration: 7355.28,
  workerId: "<id>",
  workerThreshold: 594.79,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `duration`                                       | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `filter`                                         | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `level`                                          | [models.CaptureLevel](../models/capturelevel.md) | :heavy_check_mark:                               | N/A                                              |
| `maxEvents`                                      | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `stepDuration`                                   | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `workerId`                                       | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `workerThreshold`                                | *number*                                         | :heavy_minus_sign:                               | N/A                                              |