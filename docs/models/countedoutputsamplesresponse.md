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
        },
        {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
        {
          "key": "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | number of items present in the items array                           |
| `items`                                                              | [models.OutputSamplesResponse](../models/outputsamplesresponse.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |