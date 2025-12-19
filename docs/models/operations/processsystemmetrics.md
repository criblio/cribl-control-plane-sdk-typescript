# ProcessSystemMetrics

## Example Usage

```typescript
import { ProcessSystemMetrics } from "cribl-control-plane/models/operations";

let value: ProcessSystemMetrics = {
  sets: [
    {
      name: "<value>",
      filter: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `sets`                                                                       | [operations.SetSystemMetrics](../../models/operations/setsystemmetrics.md)[] | :heavy_minus_sign:                                                           | Configure sets to collect process metrics                                    |