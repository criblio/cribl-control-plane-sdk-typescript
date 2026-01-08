# FunctionLimit

## Example Usage

```typescript
import { FunctionLimit } from "cribl-control-plane/models";

let value: FunctionLimit = {
  __filename: "example.file",
  asyncTimeout: 7993.11,
  cribl_version: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "limit",
  loadTime: 7176.7,
  modTime: 8633.66,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `filename`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `asyncTimeout`                                                         | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `criblVersion`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `disabled`                                                             | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `group`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `handleSignals`                                                        | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `id`                                                                   | *"limit"*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `loadTime`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `modTime`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `sync`                                                                 | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `uischema`                                                             | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | N/A                                                                    |
| `version`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `schema`                                                               | [models.FunctionConfSchemaLimit](../models/functionconfschemalimit.md) | :heavy_minus_sign:                                                     | N/A                                                                    |