# PipelineFunctionMvExpand

## Example Usage

```typescript
import { PipelineFunctionMvExpand } from "cribl-control-plane/models";

let value: PipelineFunctionMvExpand = {
  id: "mv_expand",
  description: "however fooey greedily",
  disabled: true,
  final: true,
  conf: {
    sourceFields: [],
    targetNames: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    itemIndexName: "<value>",
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"mv_expand"*                                                                                | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.PipelineFunctionMvExpandConf](../models/pipelinefunctionmvexpandconf.md)             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |