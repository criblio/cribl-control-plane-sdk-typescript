# PackRequestBody2

## Example Usage

```typescript
import { PackRequestBody2 } from "cribl-control-plane/models";

let value: PackRequestBody2 = {
  id: "<id>",
  spec: "<value>",
  version: "<value>",
  minLogStreamVersion: "<value>",
  displayName: "Cristal18",
  author: "<value>",
  description: "via sick impact quash failing ornate",
  source: "<value>",
  tags: {
    dataType: [
      "bit",
      "enum",
    ],
    domain: [
      "crafty-pronoun.org",
      "agitated-millet.net",
    ],
    technology: [
      "<value 1>",
    ],
    streamtags: [
      "<value 1>",
    ],
  },
  allowCustomFunctions: false,
  force: false,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `spec`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `version`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `minLogStreamVersion`                                                 | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `displayName`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `author`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `source`                                                              | *string*                                                              | :heavy_check_mark:                                                    | The source of the pack. If not present, an empty pack will be created |
| `tags`                                                                | [models.PackRequestBodyTags2](../models/packrequestbodytags2.md)      | :heavy_minus_sign:                                                    | N/A                                                                   |
| `allowCustomFunctions`                                                | *boolean*                                                             | :heavy_minus_sign:                                                    | N/A                                                                   |
| `force`                                                               | *boolean*                                                             | :heavy_minus_sign:                                                    | N/A                                                                   |