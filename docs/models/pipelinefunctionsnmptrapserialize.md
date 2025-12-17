# PipelineFunctionSnmpTrapSerialize

## Example Usage

```typescript
import { PipelineFunctionSnmpTrapSerialize } from "cribl-control-plane/models";

let value: PipelineFunctionSnmpTrapSerialize = {
  id: "snmp_trap_serialize",
  description: "upward irritably release loyally gee remark homeschool",
  disabled: true,
  final: true,
  conf: {
    v3User: {
      name: "<value>",
      authKey: "<value>",
    },
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `filter`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | Filter that selects data to be fed through this Function                                       |
| `id`                                                                                           | *"snmp_trap_serialize"*                                                                        | :heavy_check_mark:                                                                             | Function ID                                                                                    |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | Simple description of this step                                                                |
| `disabled`                                                                                     | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | If true, data will not be pushed through this function                                         |
| `final`                                                                                        | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | If enabled, stops the results of this Function from being passed to the downstream Functions   |
| `conf`                                                                                         | [models.FunctionConfSchemaSnmpTrapSerialize](../models/functionconfschemasnmptrapserialize.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `groupId`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | Group ID                                                                                       |