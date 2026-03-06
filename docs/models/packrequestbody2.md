# PackRequestBody2

## Example Usage

```typescript
import { PackRequestBody2 } from "cribl-control-plane/models";

let value: PackRequestBody2 = {
  source: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `spec`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `version`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `minLogStreamVersion`                                                  | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `displayName`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `author`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `source`                                                               | *string*                                                               | :heavy_check_mark:                                                     | The source of the pack. If not present, an empty pack will be created  |
| `tags`                                                                 | [models.TagsTypePackInstallInfo](../models/tagstypepackinstallinfo.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `allowCustomFunctions`                                                 | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `force`                                                                | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |