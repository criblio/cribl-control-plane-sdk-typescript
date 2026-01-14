# PipelineFunctionDynamicSampling

## Example Usage

```typescript
import { PipelineFunctionDynamicSampling } from "cribl-control-plane/models";

let value: PipelineFunctionDynamicSampling = {
  filter: "<value>",
  id: "dynamic_sampling",
  description: "creamy under yum speedily if",
  disabled: true,
  final: true,
  conf: {
    mode: "log",
    keyExpr: "<value>",
    samplePeriod: 6554.27,
    minEvents: 4963.7,
    maxSampleRate: 7995.35,
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"dynamic_sampling"*                                                                         | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.FunctionConfSchemaDynamicSampling](../models/functionconfschemadynamicsampling.md)   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |