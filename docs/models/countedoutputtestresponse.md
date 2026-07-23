# CountedOutputTestResponse

## Example Usage

```typescript
import { CountedOutputTestResponse } from "cribl-control-plane/models";

let value: CountedOutputTestResponse = {
  count: 420429,
  items: [
    {
      outputId: "<id>",
      success: false,
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `count`                                                        | *number*                                                       | :heavy_check_mark:                                             | number of items present in the items array                     |
| `items`                                                        | [models.OutputTestResponse](../models/outputtestresponse.md)[] | :heavy_check_mark:                                             | List of items in this response.                                |