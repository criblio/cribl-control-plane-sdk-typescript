# FunctionConfSchemaHandlebars

## Example Usage

```typescript
import { FunctionConfSchemaHandlebars } from "cribl-control-plane/models";

let value: FunctionConfSchemaHandlebars = {
  templates: [
    {
      id: "<id>",
      content: "<value>",
      description:
        "zesty red contrail fiercely international sympathetically yum",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `templates`                                                                                                                            | [models.FunctionConfSchemaHandlebarsTemplateDefinition](../models/functionconfschemahandlebarstemplatedefinition.md)[]                 | :heavy_minus_sign:                                                                                                                     | Array of template definitions. Uses event.__template_id to select template at runtime.                                                 |
| `targetField`                                                                                                                          | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Field name to store the rendered template result. Defaults to _raw.                                                                    |
| `parseJson`                                                                                                                            | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Parse the rendered template as JSON and store as an object instead of a string. Useful for building structured data like Slack blocks. |
| `removeOnNull`                                                                                                                         | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Remove the target field if the rendered result is empty or null.                                                                       |