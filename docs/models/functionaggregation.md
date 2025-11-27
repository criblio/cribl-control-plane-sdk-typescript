# FunctionAggregation

## Example Usage

```typescript
import { FunctionAggregation } from "cribl-control-plane/models";

let value: FunctionAggregation = {
  conf: {
    prefix: "<value>",
    aggregations: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    groupbys: [
      "<value 1>",
      "<value 2>",
    ],
    flushEventLimit: 1514.56,
    flushMemLimit: "<value>",
    searchAggMode: "<value>",
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "aggregation",
  initTime: 5703.38,
  loadTime: 5971.36,
  modTime: 7424.77,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `conf`                                                                 | [models.FunctionAggregationConf](../models/functionaggregationconf.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `filename`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `disabled`                                                             | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `group`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `id`                                                                   | [models.FunctionAggregationId](../models/functionaggregationid.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `initTime`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `loadTime`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `modTime`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `schema`                                                               | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | JSON Schema Draft-06                                                   |
| `uischema`                                                             | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | N/A                                                                    |
| `version`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |