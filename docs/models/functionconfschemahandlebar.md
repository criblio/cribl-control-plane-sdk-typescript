# FunctionConfSchemaHandlebar

## Example Usage

```typescript
import { FunctionConfSchemaHandlebar } from "cribl-control-plane/models";

let value: FunctionConfSchemaHandlebar = {
  templates: {
    "key": {
      content: "<value>",
      description:
        "overconfidently underneath surface amongst shakily afore anneal stoop",
    },
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `templates`                                                                                                                            | Record<string, [models.FunctionConfSchemaHandlebarTemplateDefinition](../models/functionconfschemahandlebartemplatedefinition.md)>     | :heavy_minus_sign:                                                                                                                     | Object with template_id as keys and template definitions as values. Uses event.__template_id to select template at runtime.            |
| `targetField`                                                                                                                          | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Field name to store the rendered template result. Defaults to _raw.                                                                    |
| `parseJson`                                                                                                                            | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Parse the rendered template as JSON and store as an object instead of a string. Useful for building structured data like Slack blocks. |
| `removeOnNull`                                                                                                                         | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Remove the target field if the rendered result is empty or null.                                                                       |