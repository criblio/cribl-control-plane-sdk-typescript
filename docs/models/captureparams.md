# CaptureParams

## Example Usage

```typescript
import { CaptureParams } from "cribl-control-plane/models";

let value: CaptureParams = {
  duration: 8960.32,
  filter: "<value>",
  level: 0,
  maxEvents: 767293,
  stepDuration: 735528,
  workerId: "<id>",
  workerThreshold: 59479,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `duration`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | Amount of time to keep capture open, in seconds                                        |
| `filter`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | Filter expression to capture events                                                    |
| `level`                                                                                | [models.CaptureLevel](../models/capturelevel.md)                                       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `maxEvents`                                                                            | *number*                                                                               | :heavy_check_mark:                                                                     | Maximum number of events to capture                                                    |
| `stepDuration`                                                                         | *number*                                                                               | :heavy_minus_sign:                                                                     | How long to wait before increasing the capture sample size. Specify 1 second or longer |
| `workerId`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | Worker ID                                                                              |
| `workerThreshold`                                                                      | *number*                                                                               | :heavy_minus_sign:                                                                     | Limits how many Workers will capture initially. The 0 default means unlimited.         |