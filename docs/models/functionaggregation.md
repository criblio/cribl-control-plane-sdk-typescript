# FunctionAggregation

## Example Usage

```typescript
import { FunctionAggregation } from "cribl-control-plane/models";

let value: FunctionAggregation = {
  filename: "example.file",
  asyncTimeout: 7917.59,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "aggregation",
  loadTime: 7102.72,
  modTime: 5703.38,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    prefix: "<value>",
    aggregations: [
      "<value 1>",
      "<value 2>",
    ],
    groupbys: [
      "<value 1>",
      "<value 2>",
    ],
    flushEventLimit: 956.07,
    flushMemLimit: "<value>",
    searchAggMode: "<value>",
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `filename`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `asyncTimeout`                                                             | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `criblVersion`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `disabled`                                                                 | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `group`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `handleSignals`                                                            | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `id`                                                                       | [models.FunctionAggregationId](../models/functionaggregationid.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `loadTime`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `modTime`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `sync`                                                                     | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `uischema`                                                                 | Record<string, *any*>                                                      | :heavy_check_mark:                                                         | N/A                                                                        |
| `version`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `schema`                                                                   | [models.FunctionAggregationSchema](../models/functionaggregationschema.md) | :heavy_minus_sign:                                                         | N/A                                                                        |