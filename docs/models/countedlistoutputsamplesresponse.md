# CountedListOutputSamplesResponse

## Example Usage

```typescript
import { CountedListOutputSamplesResponse } from "cribl-control-plane/models";

let value: CountedListOutputSamplesResponse = {
  count: 482614,
  items: [
    {
      events: [],
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | number of items present in the items array                           |
| `items`                                                              | [models.OutputSamplesResponse](../models/outputsamplesresponse.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |