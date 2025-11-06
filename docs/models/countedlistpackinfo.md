# CountedListPackInfo

## Example Usage

```typescript
import { CountedListPackInfo } from "cribl-control-plane/models";

let value: CountedListPackInfo = {
  count: 24486,
  items: [
    {
      author: "<value>",
      dependencies: {
        "key": "<value>",
      },
      description: "unless fathom briefly",
      displayName: "Nikita.Conn20",
      exports: [
        "<value 1>",
        "<value 2>",
      ],
      id: "<id>",
      inputs: 765.51,
      isDisabled: false,
      minLogStreamVersion: "<value>",
      outputs: 3610.23,
      settings: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      source: "<value>",
      spec: "<value>",
      tags: {
        dataType: [
          "set",
          "int",
          "point",
        ],
        domain: [
          "vast-ocelot.com",
          "tiny-mousse.biz",
        ],
        streamtags: [
          "<value 1>",
          "<value 2>",
        ],
        technology: [
          "<value 1>",
          "<value 2>",
        ],
      },
      version: "<value>",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | [models.PackInfo](../models/packinfo.md)[] | :heavy_minus_sign:                         | N/A                                        |