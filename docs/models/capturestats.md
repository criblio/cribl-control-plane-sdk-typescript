# CaptureStats

## Example Usage

```typescript
import { CaptureStats } from "cribl-control-plane/models";

let value: CaptureStats = {
  cpu: {
    system: 8119.92,
    user: 6252.55,
  },
  duration: 7233.35,
  functions: [
    {
      bytesIn: 3036.94,
      bytesOut: 3153.4,
      duration: 7604.38,
      eventsIn: 5161.02,
      eventsOut: 5473.59,
      func: "<value>",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `cpu`                                                      | [models.CaptureStatsCpu](../models/capturestatscpu.md)     | :heavy_check_mark:                                         | N/A                                                        |
| `duration`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `functions`                                                | [models.CaptureFunctions](../models/capturefunctions.md)[] | :heavy_check_mark:                                         | N/A                                                        |