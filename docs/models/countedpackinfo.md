# CountedPackInfo

## Example Usage

```typescript
import { CountedPackInfo } from "cribl-control-plane/models";

let value: CountedPackInfo = {
  count: 660639,
  items: [
    {
      author: "<value>",
      dependencies: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      description: "collaborate ha validity orchid",
      displayName: "Beulah.Johnson",
      exports: [
        "<value 1>",
        "<value 2>",
      ],
      id: "<id>",
      inputs: 7751.76,
      isDisabled: false,
      minLogStreamVersion: "<value>",
      outputs: 6468.03,
      settings: {
        "key": "<value>",
      },
      source: "<value>",
      spec: "<value>",
      tags: {
        dataType: [
          "real",
          "point",
        ],
        domain: [
          "cautious-coliseum.name",
          "awful-space.net",
        ],
        streamtags: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
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

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | [models.PackInfo](../models/packinfo.md)[] | :heavy_minus_sign:                         | N/A                                        |