# FunctionOtlpTraces

## Example Usage

```typescript
import { FunctionOtlpTraces } from "cribl-control-plane/models";

let value: FunctionOtlpTraces = {
  __filename: "example.file",
  asyncTimeout: 8088.34,
  cribl_version: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "otlp_traces",
  loadTime: 8099.62,
  modTime: 2383.72,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `filename`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `asyncTimeout`                                                                   | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `criblVersion`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `disabled`                                                                       | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `group`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `handleSignals`                                                                  | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `id`                                                                             | *"otlp_traces"*                                                                  | :heavy_check_mark:                                                               | N/A                                                                              |
| `loadTime`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `modTime`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `sync`                                                                           | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `uischema`                                                                       | Record<string, *any*>                                                            | :heavy_check_mark:                                                               | N/A                                                                              |
| `version`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `schema`                                                                         | [models.FunctionConfSchemaOtlpTraces](../models/functionconfschemaotlptraces.md) | :heavy_minus_sign:                                                               | N/A                                                                              |