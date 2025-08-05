# PackRequestBody

## Example Usage

```typescript
import { PackRequestBody } from "cribl-control-plane/models";

let value: PackRequestBody = {
  allowCustomFunctions: true,
  author: "<value>",
  description: "forenenst geez language before surface",
  displayName: "Alta95",
  exports: [
    "<value 1>",
  ],
  force: false,
  id: "<id>",
  inputs: 9992.24,
  minLogStreamVersion: "<value>",
  outputs: 2036.91,
  source: "<value>",
  spec: "<value>",
  tags: {
    dataType: [
      "double",
      "datetime",
      "enum",
    ],
    domain: [
      "perky-allocation.com",
      "slushy-markup.net",
      "spiteful-blight.com",
    ],
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    technology: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  version: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `allowCustomFunctions`                                         | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `author`                                                       | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `description`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `displayName`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `exports`                                                      | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `force`                                                        | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `inputs`                                                       | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `minLogStreamVersion`                                          | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `outputs`                                                      | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `source`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `spec`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `tags`                                                         | [models.PackRequestBodyTags](../models/packrequestbodytags.md) | :heavy_minus_sign:                                             | N/A                                                            |
| `version`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |