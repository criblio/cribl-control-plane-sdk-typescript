# UpdatePacksByIdResponse

a list of PackInfo objects

## Example Usage

```typescript
import { UpdatePacksByIdResponse } from "cribl-control-plane/models/operations";

let value: UpdatePacksByIdResponse = {
  count: 878579,
  items: [
    {
      author: "<value>",
      description:
        "yet reassemble provided after fat executor given factorise before",
      displayName: "Octavia75",
      exports: [
        "<value 1>",
        "<value 2>",
      ],
      id: "<id>",
      inputs: 2362.89,
      isDisabled: false,
      minLogStreamVersion: "<value>",
      outputs: 8360.48,
      settings: {
        "key": "<value>",
      },
      source: "<value>",
      spec: "<value>",
      tags: {
        dataType: [],
        domain: [],
        streamtags: [
          "<value 1>",
        ],
        technology: [
          "<value 1>",
        ],
      },
      version: "<value>",
    },
  ],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `count`                                       | *number*                                      | :heavy_minus_sign:                            | number of items present in the items array    |
| `items`                                       | [models.PackInfo](../../models/packinfo.md)[] | :heavy_minus_sign:                            | N/A                                           |