# PipelineFunctionDynamicSampling

## Example Usage

```typescript
import { PipelineFunctionDynamicSampling } from "cribl-control-plane/models";

let value: PipelineFunctionDynamicSampling = {
  id: "dynamic_sampling",
  conf: {
    mode: "log",
    keyExpr: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `filter`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | Filter that selects data to be fed through this Function                                       |
| `id`                                                                                           | *"dynamic_sampling"*                                                                           | :heavy_check_mark:                                                                             | Function ID                                                                                    |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | Simple description of this step                                                                |
| `disabled`                                                                                     | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | If true, data will not be pushed through this function                                         |
| `final`                                                                                        | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | If enabled, stops the results of this Function from being passed to the downstream Functions   |
| `conf`                                                                                         | [models.PipelineFunctionDynamicSamplingConf](../models/pipelinefunctiondynamicsamplingconf.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `groupId`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | Group ID                                                                                       |