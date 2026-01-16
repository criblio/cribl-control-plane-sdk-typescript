# PipelineConf

## Example Usage

```typescript
import { PipelineConf } from "cribl-control-plane/models";

let value: PipelineConf = {
  asyncFuncTimeout: 543977,
  output: "<value>",
  description: "draft however spew speedily fly marten total spellcheck",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  functions: [
    {
      filter: "<value>",
      id: "send",
      description:
        "sundae mythology incidentally huzzah over anenst whenever mechanic what",
      disabled: true,
      final: false,
      conf: {
        url: "https://worthy-sauerkraut.info/",
        group: "<value>",
        workspace: "<value>",
        sendUrlTemplate: "<value>",
        searchId: "<id>",
        tee: true,
        flushMs: 1088.86,
        suppressPreviews: false,
        mode: "sender",
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