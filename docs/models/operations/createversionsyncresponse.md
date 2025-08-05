# CreateVersionSyncResponse

a list of any objects

## Example Usage

```typescript
import { CreateVersionSyncResponse } from "cribl-control-plane/models/operations";

let value: CreateVersionSyncResponse = {
  count: 395045,
  items: [
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | Record<string, *any*>[]                    | :heavy_minus_sign:                         | N/A                                        |