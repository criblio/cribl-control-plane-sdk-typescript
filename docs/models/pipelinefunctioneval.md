# PipelineFunctionEval

## Example Usage

```typescript
import { PipelineFunctionEval } from "cribl-control-plane/models";

let value: PipelineFunctionEval = {
  filter: "<value>",
  id: "eval",
  description: "opposite why pip psst memorise amid abaft insecure",
  disabled: false,
  final: false,
  conf: {
    add: [
      {
        name: "<value>",
        value: "<value>",
        disabled: true,
      },
    ],
    keep: [
      "<value 1>",
    ],
    remove: [
      "<value 1>",
      "<value 2>",
    ],
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"eval"*                                                                                     | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.FunctionConfSchemaEval](../models/functionconfschemaeval.md)                         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |