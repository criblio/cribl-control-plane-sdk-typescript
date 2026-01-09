# ConfInput

## Example Usage

```typescript
import { ConfInput } from "cribl-control-plane/models";

let value: ConfInput = {
  asyncFuncTimeout: 626210,
  description:
    "evenly on polite yieldingly exaggerate incandescence arrogantly yearningly",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  functions: [
    {
      filter: "true",
      id: "sort",
      description:
        "wildly huzzah tasty plus yahoo ick agreement before subdued",
      disabled: false,
      final: true,
      conf: {
        sortId: "<id>",
        comparisonExpression: "<value>",
        topN: 4741.25,
        maxEvents: 2967.01,
        suppressPreviews: false,
      },
      groupId: "<id>",
    },
  ],
  groups: {
    "key": {
      name: "<value>",
      description:
        "ack regularly uh-huh naturally kettledrum before frenetically beard inasmuch quickly",
      disabled: true,
    },
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `asyncFuncTimeout`                                                                                                           | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Time (in ms) to wait for an async function to complete processing of a data item                                             |
| `output`                                                                                                                     | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The output destination for events processed by this Pipeline                                                                 |
| `description`                                                                                                                | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `streamtags`                                                                                                                 | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | Tags for filtering and grouping in @{product}                                                                                |
| `functions`                                                                                                                  | *models.PipelineFunctionConfInput*[]                                                                                         | :heavy_minus_sign:                                                                                                           | List of Functions to pass data through                                                                                       |
| `groups`                                                                                                                     | Record<string, [models.AdditionalPropertiesTypePipelineConfGroups](../models/additionalpropertiestypepipelineconfgroups.md)> | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |