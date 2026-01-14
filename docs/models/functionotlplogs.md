# FunctionOtlpLogs

## Example Usage

```typescript
import { FunctionOtlpLogs } from "cribl-control-plane/models";

let value: FunctionOtlpLogs = {
  __filename: "example.file",
  asyncTimeout: 3875.32,
  cribl_version: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "otlp_logs",
  loadTime: 7102.91,
  modTime: 6996.73,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {
    dropNonLogEvents: true,
    batchOTLPLogs: true,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `filename`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `asyncTimeout`                                                               | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `criblVersion`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `disabled`                                                                   | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `group`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `handleSignals`                                                              | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `id`                                                                         | *"otlp_logs"*                                                                | :heavy_check_mark:                                                           | N/A                                                                          |
| `loadTime`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `modTime`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `sync`                                                                       | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `uischema`                                                                   | Record<string, *any*>                                                        | :heavy_check_mark:                                                           | N/A                                                                          |
| `version`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `schema`                                                                     | [models.FunctionConfSchemaOtlpLogs](../models/functionconfschemaotlplogs.md) | :heavy_minus_sign:                                                           | N/A                                                                          |