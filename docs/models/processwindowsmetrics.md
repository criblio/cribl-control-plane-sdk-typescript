# ProcessWindowsMetrics

## Example Usage

```typescript
import { ProcessWindowsMetrics } from "cribl-control-plane/models";

let value: ProcessWindowsMetrics = {
  sets: [
    {
      name: "<value>",
      filter: "<value>",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `sets`                                                       | [models.SetWindowsMetrics](../models/setwindowsmetrics.md)[] | :heavy_minus_sign:                                           | Configure sets to collect process metrics                    |