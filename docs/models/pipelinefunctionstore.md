# PipelineFunctionStore

## Example Usage

```typescript
import { PipelineFunctionStore } from "cribl-control-plane/models";

let value: PipelineFunctionStore = {
  filter: "<value>",
  id: "store",
  description:
    "beautifully without valiantly amid shark truthfully consequently beautifully",
  disabled: false,
  final: true,
  conf: {
    type: "<value>",
    destination: "<value>",
    description: "bah casement retrospectivity awesome animated beneath vainly",
    fieldMapping: {},
    separator: "<value>",
    overwrite: false,
    compress: "<value>",
    tee: true,
    maxEvents: 559.19,
    suppressPreviews: true,
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"store"*                                                                                    | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.FunctionConfSchemaStore](../models/functionconfschemastore.md)                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |