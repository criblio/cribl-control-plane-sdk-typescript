# PipelineFunctionSend

## Example Usage

```typescript
import { PipelineFunctionSend } from "cribl-control-plane/models";

let value: PipelineFunctionSend = {
  filter: "<value>",
  id: "send",
  description: "self-assured chow rudely vol reorient whoever",
  disabled: false,
  final: true,
  conf: {
    url: "https://fond-fireplace.com/",
    group: "<value>",
    workspace: "<value>",
    sendUrlTemplate: "<value>",
    searchId: "<id>",
    tee: "<value>",
    flushMs: 2814.69,
    suppressPreviews: true,
    mode: "metrics",
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"send"*                                                                                     | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.FunctionConfSchemaSend](../models/functionconfschemasend.md)                         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |