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
      description: "confusion unaccountably dispense hmph",
      displayName: "Jace.OKon",
      exports: [
        "<value 1>",
      ],
      id: "<id>",
      inputs: 2931.37,
      isDisabled: false,
      minLogStreamVersion: "<value>",
      outputs: 9390.12,
      settings: {
        "key": "<value>",
      },
      source: "<value>",
      spec: "<value>",
      tags: {
        dataType: [
          "decimal",
          "boolean",
        ],
        domain: [
          "hungry-scaffold.name",
          "unfit-hovercraft.info",
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
      warnings: "<value>",
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `count`                                                     | *number*                                                    | :heavy_minus_sign:                                          | number of items present in the items array                  |
| `items`                                                     | [models.PackInstallInfo](../../models/packinstallinfo.md)[] | :heavy_minus_sign:                                          | N/A                                                         |