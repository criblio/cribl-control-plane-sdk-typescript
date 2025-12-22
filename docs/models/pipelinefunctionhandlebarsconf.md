# PipelineFunctionHandlebarsConf

## Example Usage

```typescript
import { PipelineFunctionHandlebarsConf } from "cribl-control-plane/models";

let value: PipelineFunctionHandlebarsConf = {
  templates: [],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `templates`                                                                                                                            | [models.PipelineFunctionHandlebarsTemplateDefinition](../models/pipelinefunctionhandlebarstemplatedefinition.md)[]                     | :heavy_check_mark:                                                                                                                     | Array of template definitions. Uses event.__template_id to select template at runtime.                                                 |
| `targetField`                                                                                                                          | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Field name to store the rendered template result. Defaults to _raw.                                                                    |
| `parseJson`                                                                                                                            | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Parse the rendered template as JSON and store as an object instead of a string. Useful for building structured data like Slack blocks. |
| `removeOnNull`                                                                                                                         | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Remove the target field if the rendered result is empty or null.                                                                       |