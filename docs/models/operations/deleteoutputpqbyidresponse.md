# DeleteOutputPqByIdResponse

A list of job ids for the background job that clears the persistent queue

## Example Usage

```typescript
import { DeleteOutputPqByIdResponse } from "cribl-control-plane/models/operations";

let value: DeleteOutputPqByIdResponse = {
  count: 590323,
  items: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *string*[]                                 | :heavy_minus_sign:                         | N/A                                        |