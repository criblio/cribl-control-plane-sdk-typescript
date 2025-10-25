# CreateVersionUndoResponse

a list of object objects

## Example Usage

```typescript
import { CreateVersionUndoResponse } from "cribl-control-plane/models/operations";

let value: CreateVersionUndoResponse = {
  count: 796584,
  items: [
    {
      "key": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | Record<string, *any*>[]                    | :heavy_minus_sign:                         | N/A                                        |