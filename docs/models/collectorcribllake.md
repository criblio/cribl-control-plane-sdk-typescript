# CollectorCriblLake

## Example Usage

```typescript
import { CollectorCriblLake } from "cribl-control-plane/models";

let value: CollectorCriblLake = {
  type: "cribl_lake",
  dataset: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `type`                             | *"cribl_lake"*                     | :heavy_check_mark:                 | Collector type: cribl_lake         |
| `dataset`                          | *string*                           | :heavy_check_mark:                 | Lake dataset to collect data from. |