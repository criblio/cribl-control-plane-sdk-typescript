# PipelineConf

## Example Usage

```typescript
import { PipelineConf } from "cribl-control-plane/models";

let value: PipelineConf = {
  asyncFuncTimeout: 543977,
  description: "draft however spew speedily fly marten total spellcheck",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  groups: {
    "key": {
      name: "<value>",
      description: "regarding structure but squiggly soupy equally",
      disabled: false,
    },
  },
  functions: [
    {
      id: "<id>",
      description: "outbid dilate which eyebrow before engage",
      disabled: true,
      final: true,
      conf: {},
      groupId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `asyncFuncTimeout`                                                               | *number*                                                                         | :heavy_minus_sign:                                                               | Time (in ms) to wait for an async function to complete processing of a data item |
| `output`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | The output destination for events processed by this Pipeline                     |
| `description`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `streamtags`                                                                     | *string*[]                                                                       | :heavy_minus_sign:                                                               | Tags for filtering and grouping in @{product}                                    |
| `groups`                                                                         | Record<string, [models.PipelineGroups](../models/pipelinegroups.md)>             | :heavy_minus_sign:                                                               | N/A                                                                              |
| `functions`                                                                      | [models.PipelineFunctionConf](../models/pipelinefunctionconf.md)[]               | :heavy_minus_sign:                                                               | List of Functions to pass data through                                           |