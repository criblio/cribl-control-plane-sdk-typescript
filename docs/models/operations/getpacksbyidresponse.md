# GetPacksByIdResponse

a list of PackInfo objects

## Example Usage

```typescript
import { GetPacksByIdResponse } from "cribl-control-plane/models/operations";

let value: GetPacksByIdResponse = {
  count: 126508,
  items: [
    {
      author: "<value>",
      dependencies: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      description:
        "kielbasa mousse er wherever generously fooey honestly bungalow whenever",
      displayName: "Talon_Reichel",
      exports: [
        "<value 1>",
      ],
      id: "<id>",
      inputs: 9391.98,
      isDisabled: false,
      minLogStreamVersion: "<value>",
      outputs: 94.53,
      settings: {
        "key": "<value>",
      },
      source: "<value>",
      spec: "<value>",
      tags: {
        dataType: [],
        domain: [
          "known-sailor.name",
          "austere-calculus.net",
        ],
        streamtags: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        technology: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
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