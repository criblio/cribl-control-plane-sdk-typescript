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
  allowCustomFunctions: true,
  force: false,
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
| `tags`                                                                | [models.Tags1Type](../models/tags1type.md)                            | :heavy_minus_sign:                                                    | N/A                                                                   |
| `allowCustomFunctions`                                                | *boolean*                                                             | :heavy_minus_sign:                                                    | N/A                                                                   |
| `force`                                                               | *boolean*                                                             | :heavy_minus_sign:                                                    | N/A                                                                   |