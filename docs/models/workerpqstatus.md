# WorkerPQStatus

## Example Usage

```typescript
import { WorkerPQStatus } from "cribl-control-plane/models";

let value: WorkerPQStatus = {
  health: 38.37,
  metrics: {
    "key": "<value>",
    "key1": "<value>",
  },
  timestamp: 9897.21,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `error`                                        | [models.StatusError](../models/statuserror.md) | :heavy_minus_sign:                             | N/A                                            |
| `health`                                       | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `metrics`                                      | Record<string, *any*>                          | :heavy_check_mark:                             | N/A                                            |
| `timestamp`                                    | *number*                                       | :heavy_check_mark:                             | N/A                                            |