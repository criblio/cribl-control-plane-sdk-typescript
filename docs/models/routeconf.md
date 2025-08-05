# RouteConf

## Example Usage

```typescript
import { RouteConf } from "cribl-control-plane/models";

let value: RouteConf = {
  clones: [
    {},
  ],
  context: "<value>",
  description: "scare now unless vet highly sway longingly",
  disabled: true,
  enableOutputExpression: true,
  filter: "<value>",
  final: false,
  groupId: "<id>",
  id: "<id>",
  name: "<value>",
  output: "<value>",
  outputExpression: "<value>",
  pipeline: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `clones`                                               | [models.RouteCloneConf](../models/routecloneconf.md)[] | :heavy_minus_sign:                                     | N/A                                                    |
| `context`                                              | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `description`                                          | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `disabled`                                             | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    |
| `enableOutputExpression`                               | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    |
| `filter`                                               | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `final`                                                | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `groupId`                                              | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `output`                                               | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `outputExpression`                                     | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `pipeline`                                             | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |