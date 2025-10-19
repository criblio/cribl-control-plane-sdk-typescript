# SearchJobMetadata

## Example Usage

```typescript
import { SearchJobMetadata } from "cribl-control-plane/models";

let value: SearchJobMetadata = {
  arguments: {
    "key": [
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      {},
    ],
    "key1": [
      {
        "key": "<value>",
        "key1": "<value>",
      },
      {
        "key": "<value>",
        "key1": "<value>",
      },
    ],
  },
  computeTypes: {
    v1: 9704,
    v2: 1656.84,
    lakehouse: 2862.23,
  },
  datasets: {
    "key": 6515.65,
    "key1": 1518.55,
  },
  functions: {
    "key": 5705.55,
    "key1": 7923.64,
    "key2": 5529.92,
  },
  operators: {
    "key": 1560.83,
  },
  providerTypes: {
    "key": 6158.29,
    "key1": 6571.8,
    "key2": 2429.04,
  },
  providers: {
    "key": 7988.11,
    "key1": 251.32,
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `arguments`                                      | Record<string, Record<string, *string*>[]>       | :heavy_minus_sign:                               | N/A                                              |
| `computeTypes`                                   | [models.ComputeTypes](../models/computetypes.md) | :heavy_minus_sign:                               | N/A                                              |
| `datasets`                                       | Record<string, *number*>                         | :heavy_minus_sign:                               | N/A                                              |
| `functions`                                      | Record<string, *number*>                         | :heavy_minus_sign:                               | N/A                                              |
| `operators`                                      | Record<string, *number*>                         | :heavy_minus_sign:                               | N/A                                              |
| `providerTypes`                                  | Record<string, *number*>                         | :heavy_minus_sign:                               | N/A                                              |
| `providers`                                      | Record<string, *number*>                         | :heavy_minus_sign:                               | N/A                                              |