# CountedOutputSamplesResponse

## Example Usage

```typescript
import { CountedOutputSamplesResponse } from "cribl-control-plane/models";

let value: CountedOutputSamplesResponse = {
  count: 377773,
  items: [
    {
      events: [
        {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_check_mark:                                                   | number of items present in the items array                           |
| `items`                                                              | [models.OutputSamplesResponse](../models/outputsamplesresponse.md)[] | :heavy_check_mark:                                                   | List of items in this response.                                      |