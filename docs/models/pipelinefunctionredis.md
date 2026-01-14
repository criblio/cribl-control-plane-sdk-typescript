# PipelineFunctionRedis

## Example Usage

```typescript
import { PipelineFunctionRedis } from "cribl-control-plane/models";

let value: PipelineFunctionRedis = {
  filter: "<value>",
  id: "redis",
  description: "irresponsible probe er woot delete though",
  disabled: false,
  final: false,
  conf: {
    commands: [
      {
        outField: "<value>",
        command: "<value>",
        keyExpr: "<value>",
        argsExpr: "<value>",
      },
    ],
    deploymentType: "cluster",
    authType: "manual",
    maxBlockSecs: 8522.53,
    enableClientSideCaching: false,
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"redis"*                                                                                    | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.FunctionConfSchemaRedis](../models/functionconfschemaredis.md)                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |