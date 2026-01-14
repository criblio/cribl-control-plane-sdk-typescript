# PipelineFunctionDropDimensions

## Example Usage

```typescript
import { PipelineFunctionDropDimensions } from "cribl-control-plane/models";

let value: PipelineFunctionDropDimensions = {
  filter: "<value>",
  id: "drop_dimensions",
  description: "limited cruelty disconnection whether fund outset across oddly",
  disabled: false,
  final: true,
  conf: {
    timeWindow: "<value>",
    dropDimensions: [
      "<value 1>",
      "<value 2>",
    ],
    flushOnInputClose: true,
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"drop_dimensions"*                                                                          | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.FunctionConfSchemaDropDimensions](../models/functionconfschemadropdimensions.md)     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |