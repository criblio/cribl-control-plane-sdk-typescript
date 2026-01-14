# PipelineFunctionHandlebars

## Example Usage

```typescript
import { PipelineFunctionHandlebars } from "cribl-control-plane/models";

let value: PipelineFunctionHandlebars = {
  filter: "<value>",
  id: "handlebars",
  description: "quirkily numeracy endow",
  disabled: false,
  final: true,
  conf: {
    templates: [
      {
        id: "<id>",
        content: "<value>",
        description: "upwardly however hmph",
        type: "<value>",
      },
    ],
    targetField: "<value>",
    parseJson: false,
    removeOnNull: true,
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"handlebars"*                                                                               | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.FunctionConfSchemaHandlebars](../models/functionconfschemahandlebars.md)             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |