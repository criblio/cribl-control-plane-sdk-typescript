# Conf

## Example Usage

```typescript
import { Conf } from "cribl-control-plane/models";

let value: Conf = {
  asyncFuncTimeout: 645963,
  description: "against with birth when",
  streamtags: [
    "<value 1>",
  ],
  functions: [
    {
      id: "<id>",
      description: "poorly huzzah disinherit considering pomelo barring",
      disabled: true,
      final: true,
      conf: {},
      groupId: "<id>",
    },
  ],
  groups: {
    "key": {
      name: "<value>",
      description: "bah out great",
      disabled: false,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `asyncFuncTimeout`                                                               | *number*                                                                         | :heavy_minus_sign:                                                               | Time (in ms) to wait for an async function to complete processing of a data item |
| `output`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | The output destination for events processed by this Pipeline                     |
| `description`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `streamtags`                                                                     | *string*[]                                                                       | :heavy_minus_sign:                                                               | Tags for filtering and grouping in @{product}                                    |
| `functions`                                                                      | [models.PipelineFunctionConf](../models/pipelinefunctionconf.md)[]               | :heavy_minus_sign:                                                               | List of Functions to pass data through                                           |
| `groups`                                                                         | Record<string, [models.PipelineGroups](../models/pipelinegroups.md)>             | :heavy_minus_sign:                                                               | N/A                                                                              |