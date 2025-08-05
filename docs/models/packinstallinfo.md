# PackInstallInfo

## Example Usage

```typescript
import { PackInstallInfo } from "cribl-control-plane/models";

let value: PackInstallInfo = {
  author: "<value>",
  description: "celebrated supposing underneath",
  displayName: "Julie.Larson43",
  exports: [
    "<value 1>",
  ],
  id: "<id>",
  inputs: 1173.85,
  isDisabled: true,
  minLogStreamVersion: "<value>",
  outputs: 4525.11,
  settings: {
    "key": "<value>",
    "key1": "<value>",
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
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `author`                                                       | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `description`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `displayName`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `exports`                                                      | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `inputs`                                                       | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `isDisabled`                                                   | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `minLogStreamVersion`                                          | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `outputs`                                                      | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `settings`                                                     | Record<string, *any*>                                          | :heavy_minus_sign:                                             | N/A                                                            |
| `source`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `spec`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `tags`                                                         | [models.PackInstallInfoTags](../models/packinstallinfotags.md) | :heavy_minus_sign:                                             | N/A                                                            |
| `version`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `warnings`                                                     | *any*                                                          | :heavy_check_mark:                                             | N/A                                                            |