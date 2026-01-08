# FunctionSnmpTrapSerialize

## Example Usage

```typescript
import { FunctionSnmpTrapSerialize } from "cribl-control-plane/models";

let value: FunctionSnmpTrapSerialize = {
  __filename: "example.file",
  asyncTimeout: 3177.3,
  cribl_version: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "snmp_trap_serialize",
  loadTime: 9112.65,
  modTime: 7663.12,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    v3User: {
      name: "<value>",
      authKey: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `filename`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `asyncTimeout`                                                                                 | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `criblVersion`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `disabled`                                                                                     | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `group`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `handleSignals`                                                                                | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *"snmp_trap_serialize"*                                                                        | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `loadTime`                                                                                     | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `modTime`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `sync`                                                                                         | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `uischema`                                                                                     | Record<string, *any*>                                                                          | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `version`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `schema`                                                                                       | [models.FunctionConfSchemaSnmpTrapSerialize](../models/functionconfschemasnmptrapserialize.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |