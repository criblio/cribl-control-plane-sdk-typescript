# PackInfo

## Example Usage

```typescript
import { PackInfo } from "cribl-control-plane/models";

let value: PackInfo = {
  author: "<value>",
  dependencies: {
    "key": "<value>",
    "key1": "<value>",
  },
  description: "doubtfully inasmuch flustered pish unless against pfft circa",
  displayName: "Roberto17",
  exports: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  id: "<id>",
  inputs: 9550.09,
  isDisabled: true,
  minLogStreamVersion: "<value>",
  outputs: 2044.25,
  settings: {
    "key": "<value>",
    "key1": "<value>",
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
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `author`                                         | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `dependencies`                                   | Record<string, *string*>                         | :heavy_minus_sign:                               | N/A                                              |
| `description`                                    | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `displayName`                                    | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `exports`                                        | *string*[]                                       | :heavy_minus_sign:                               | N/A                                              |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `inputs`                                         | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `isDisabled`                                     | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |
| `minLogStreamVersion`                            | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `outputs`                                        | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `settings`                                       | Record<string, *any*>                            | :heavy_minus_sign:                               | N/A                                              |
| `source`                                         | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `spec`                                           | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `tags`                                           | [models.PackInfoTags](../models/packinfotags.md) | :heavy_minus_sign:                               | N/A                                              |
| `version`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              |