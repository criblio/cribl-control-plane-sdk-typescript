# Conf

## Example Usage

```typescript
import { Conf } from "cribl-control-plane/models";

let value: Conf = {
  asyncFuncTimeout: 645963,
  output: "<value>",
  description: "against with birth when",
  streamtags: [
    "<value 1>",
  ],
  functions: [
    {
      filter: "<value>",
      id: "notifications",
      description:
        "that woeful uh-huh negotiation limply prejudge folklore needily",
      disabled: false,
      final: false,
      conf: {
        id: "<id>",
        field: "<value>",
        deduplicate: false,
      },
      groupId: "<id>",
    },
  ],
  groups: {
    "key": {
      name: "<value>",
      description:
        "march meanwhile potentially although trouser wearily furthermore weary whereas",
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
| `functions`                                                                                                                  | *models.PipelineFunctionConf*[]                                                                                              | :heavy_minus_sign:                                                                                                           | List of Functions to pass data through                                                                                       |
| `groups`                                                                                                                     | Record<string, [models.AdditionalPropertiesTypePipelineConfGroups](../models/additionalpropertiestypepipelineconfgroups.md)> | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |