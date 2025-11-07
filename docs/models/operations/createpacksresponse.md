# CreatePacksResponse

a list of PackInstallInfo objects

## Example Usage

```typescript
import { CreatePacksResponse } from "cribl-control-plane/models/operations";

let value: CreatePacksResponse = {
  count: 58798,
  items: [
    {
      author: "<value>",
      dependencies: {
        "key": "<value>",
      },
      description: "helplessly though past nor below slowly yak parody gah eek",
      displayName: "Mable.Johnson",
      exports: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      id: "<id>",
      inputs: 9461.44,
      isDisabled: true,
      minLogStreamVersion: "<value>",
      outputs: 6574.27,
      settings: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      source: "<value>",
      spec: "<value>",
      tags: {
        dataType: [
          "int",
        ],
        domain: [
          "damp-legging.biz",
        ],
        streamtags: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        technology: [
          "<value 1>",
          "<value 2>",
        ],
      },
      version: "<value>",
      warnings: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `count`                                                     | *number*                                                    | :heavy_minus_sign:                                          | number of items present in the items array                  |
| `items`                                                     | [models.PackInstallInfo](../../models/packinstallinfo.md)[] | :heavy_minus_sign:                                          | N/A                                                         |