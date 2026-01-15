# PipelineFunctionSerde

## Example Usage

```typescript
import { PipelineFunctionSerde } from "cribl-control-plane/models";

let value: PipelineFunctionSerde = {
  filter: "<value>",
  id: "serde",
  description: "aged concerning formation controvert",
  disabled: false,
  final: true,
  conf: {
    mode: "extract",
    type: "clf",
    delimChar: "<value>",
    quoteChar: "<value>",
    escapeChar: "<value>",
    nullValue: "<value>",
    srcField: "<value>",
    dstField: "<value>",
    cleanFields: "<value>",
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"serde"*                                                                                    | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.PipelineFunctionSerdeConf](../models/pipelinefunctionserdeconf.md)                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |