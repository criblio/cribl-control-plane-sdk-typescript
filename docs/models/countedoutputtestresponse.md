# CountedOutputTestResponse

## Example Usage

```typescript
import { CountedOutputTestResponse } from "cribl-control-plane/models";

let value: CountedOutputTestResponse = {
  count: 420429,
  items: [
    {
      details: {
        "key": "<value>",
        "key1": "<value>",
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

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `count`                                                        | *number*                                                       | :heavy_minus_sign:                                             | number of items present in the items array                     |
| `items`                                                        | [models.OutputTestResponse](../models/outputtestresponse.md)[] | :heavy_minus_sign:                                             | N/A                                                            |