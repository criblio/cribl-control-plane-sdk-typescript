# ProcessWindowsMetrics

## Example Usage

```typescript
import { ProcessWindowsMetrics } from "cribl-control-plane/models/operations";

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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `sets`                                                                         | [operations.SetWindowsMetrics](../../models/operations/setwindowsmetrics.md)[] | :heavy_minus_sign:                                                             | Configure sets to collect process metrics                                      |