# GetOutputSamplesByIdResponse

a list of OutputSamplesResponse objects

## Example Usage

```typescript
import { GetOutputSamplesByIdResponse } from "cribl-control-plane/models/operations";

let value: GetOutputSamplesByIdResponse = {
  count: 911527,
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
          "key1": "<value>",
          "key2": "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `count`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | number of items present in the items array                              |
| `items`                                                                 | [models.OutputSamplesResponse](../../models/outputsamplesresponse.md)[] | :heavy_minus_sign:                                                      | N/A                                                                     |