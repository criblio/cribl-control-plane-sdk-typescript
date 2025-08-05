# CreateOutputTestByIdResponse

a list of OutputTestResponse objects

## Example Usage

```typescript
import { CreateOutputTestByIdResponse } from "cribl-control-plane/models/operations";

let value: CreateOutputTestByIdResponse = {
  count: 709424,
  items: [
    {
      details: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      error: "<value>",
      outputId: "<id>",
      success: false,
      successDetail: "<value>",
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `count`                                                           | *number*                                                          | :heavy_minus_sign:                                                | number of items present in the items array                        |
| `items`                                                           | [models.OutputTestResponse](../../models/outputtestresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |