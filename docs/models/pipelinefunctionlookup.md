# PipelineFunctionLookup

## Example Usage

```typescript
import { PipelineFunctionLookup } from "cribl-control-plane/models";

let value: PipelineFunctionLookup = {
  id: "lookup",
  description: "ack pish wrongly",
  disabled: true,
  final: true,
  conf: {
    file: "<value>",
    matchMode: "<value>",
    matchType: "<value>",
    reloadPeriodSec: "<value>",
    inFields: [
      {
        eventField: "<value>",
        lookupField: "<value>",
      },
    ],
    outFields: [
      {
        lookupField: "<value>",
        eventField: "<value>",
        defaultValue: "<value>",
      },
    ],
    ignoreCase: "<value>",
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"lookup"*                                                                                   | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.PipelineFunctionLookupConf](../models/pipelinefunctionlookupconf.md)                 | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |