# CountedListPackInstallInfo

## Example Usage

```typescript
import { CountedListPackInstallInfo } from "cribl-control-plane/models";

let value: CountedListPackInstallInfo = {
  count: 580519,
  items: [
    {
      author: "<value>",
      dependencies: {
        "key": "<value>",
      },
      description: "trustworthy aha regal lest psst",
      displayName: "Kyra_Cruickshank48",
      exports: [
        "<value 1>",
      ],
      id: "<id>",
      inputs: 6847.74,
      isDisabled: true,
      minLogStreamVersion: "<value>",
      outputs: 6121.77,
      settings: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      source: "<value>",
      spec: "<value>",
      tags: {
        dataType: [
          "point",
        ],
        domain: [
          "ashamed-meander.biz",
          "heartfelt-sauerkraut.net",
          "neat-tusk.info",
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

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `count`                                                  | *number*                                                 | :heavy_minus_sign:                                       | number of items present in the items array               |
| `items`                                                  | [models.PackInstallInfo](../models/packinstallinfo.md)[] | :heavy_minus_sign:                                       | N/A                                                      |