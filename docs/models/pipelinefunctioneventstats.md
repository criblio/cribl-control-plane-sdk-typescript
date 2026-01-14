# PipelineFunctionEventstats

## Example Usage

```typescript
import { PipelineFunctionEventstats } from "cribl-control-plane/models";

let value: PipelineFunctionEventstats = {
  filter: "<value>",
  id: "eventstats",
  description: "boo whine log legislature spring a psst hmph submissive once",
  disabled: true,
  final: false,
  conf: {
    aggregations: [
      "<value 1>",
    ],
    groupBys: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    maxEvents: 4168.76,
    flushOnInputClose: false,
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"eventstats"*                                                                               | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.FunctionConfSchemaEventstats](../models/functionconfschemaeventstats.md)             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |