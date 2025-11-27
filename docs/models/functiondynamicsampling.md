# FunctionDynamicSampling

## Example Usage

```typescript
import { FunctionDynamicSampling } from "cribl-control-plane/models";

let value: FunctionDynamicSampling = {
  conf: {},
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "dynamic_sampling",
  initTime: 5208.81,
  loadTime: 3268.99,
  modTime: 6490.45,
  name: "<value>",
  schema: {},
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `conf`                                                                         | [models.FunctionDynamicSamplingConf](../models/functiondynamicsamplingconf.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `filename`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `disabled`                                                                     | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `group`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `id`                                                                           | [models.FunctionDynamicSamplingId](../models/functiondynamicsamplingid.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `initTime`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `loadTime`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `modTime`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `schema`                                                                       | Record<string, *any*>                                                          | :heavy_check_mark:                                                             | JSON Schema Draft-06                                                           |
| `uischema`                                                                     | Record<string, *any*>                                                          | :heavy_check_mark:                                                             | N/A                                                                            |
| `version`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |