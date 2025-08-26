# PackInfo

## Example Usage

```typescript
import { PackInfo } from "cribl-control-plane/models";

let value: PackInfo = {
  author: "<value>",
  description: "disconnection celebrate gosh once officially free yet",
  displayName: "Deontae_Kulas",
  exports: [
    "<value 1>",
  ],
  id: "<id>",
  inputs: 3590.16,
  isDisabled: false,
  minLogStreamVersion: "<value>",
  outputs: 381.62,
  settings: {
    "key": "<value>",
  },
  source: "<value>",
  spec: "<value>",
  tags: {
    dataType: [],
    domain: [
      "grown-icebreaker.net",
    ],
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    technology: [],
  },
  version: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `author`                                         | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
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