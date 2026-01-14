# FunctionConfSchemaHandlebarsTemplateDefinition

## Example Usage

```typescript
import { FunctionConfSchemaHandlebarsTemplateDefinition } from "cribl-control-plane/models";

let value: FunctionConfSchemaHandlebarsTemplateDefinition = {
  id: "<id>",
  content: "<value>",
  description: "cumbersome whoa diver",
  type: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | Unique identifier for this template                                  |
| `content`                                                            | *string*                                                             | :heavy_check_mark:                                                   | Handlebars template string                                           |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | Optional description of what this template is used for               |
| `type`                                                               | *string*                                                             | :heavy_check_mark:                                                   | Type categorization for the template (e.g., Universal, Email, Slack) |