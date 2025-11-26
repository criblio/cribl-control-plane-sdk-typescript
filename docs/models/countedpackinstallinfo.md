# CountedPackInstallInfo

## Example Usage

```typescript
import { CountedPackInstallInfo } from "cribl-control-plane/models";

let value: CountedPackInstallInfo = {
  count: 60955,
  items: [
    {
      author: "<value>",
      dependencies: {
        "key": "<value>",
        "key1": "<value>",
      },
      description:
        "low ack yuck whenever regularly helpless owlishly median rundown horde",
      displayName: "Isobel.Hintz67",
      exports: [
        "<value 1>",
        "<value 2>",
      ],
      id: "<id>",
      inputs: 5435,
      isDisabled: false,
      minLogStreamVersion: "<value>",
      outputs: 2881.88,
      settings: {
        "key": "<value>",
        "key1": "<value>",
      },
      source: "<value>",
      spec: "<value>",
      tags: {
        dataType: [
          "decimal",
        ],
        domain: [
          "big-ostrich.net",
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
      warnings: [
        "<value 1>",
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