# PackRequestBody1

## Example Usage

```typescript
import { PackRequestBody1 } from "cribl-control-plane/models";

let value: PackRequestBody1 = {
  id: "<id>",
  spec: "<value>",
  version: "<value>",
  minLogStreamVersion: "<value>",
  displayName: "Amiya.Douglas6",
  author: "<value>",
  description: "why mmm hungrily when",
  source: "<value>",
  tags: {
    dataType: [
      "varchar",
    ],
    domain: [
      "insecure-yogurt.biz",
    ],
    technology: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  allowCustomFunctions: false,
  force: true,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `spec`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `version`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `minLogStreamVersion`                                                 | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `displayName`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `author`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `source`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | The source of the pack. If not present, an empty pack will be created |
| `tags`                                                                | [models.PackRequestBodyTags1](../models/packrequestbodytags1.md)      | :heavy_minus_sign:                                                    | N/A                                                                   |
| `allowCustomFunctions`                                                | *boolean*                                                             | :heavy_minus_sign:                                                    | N/A                                                                   |
| `force`                                                               | *boolean*                                                             | :heavy_minus_sign:                                                    | N/A                                                                   |