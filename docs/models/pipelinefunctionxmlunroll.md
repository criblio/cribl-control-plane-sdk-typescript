# PipelineFunctionXmlUnroll

## Example Usage

```typescript
import { PipelineFunctionXmlUnroll } from "cribl-control-plane/models";

let value: PipelineFunctionXmlUnroll = {
  filter: "<value>",
  id: "xml_unroll",
  description: "waft account apropos plus woot opposite recede",
  disabled: true,
  final: true,
  conf: {
    unroll: "<value>",
    inherit: "<value>",
    unrollIdxField: "<value>",
    pretty: true,
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"xml_unroll"*                                                                               | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.PipelineFunctionXmlUnrollConf](../models/pipelinefunctionxmlunrollconf.md)           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |