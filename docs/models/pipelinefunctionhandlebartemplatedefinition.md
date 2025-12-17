# PipelineFunctionHandlebarTemplateDefinition

## Example Usage

```typescript
import { PipelineFunctionHandlebarTemplateDefinition } from "cribl-control-plane/models";

let value: PipelineFunctionHandlebarTemplateDefinition = {
  content: "<value>",
  description: "hence alb sheathe phooey frozen because",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `content`                                                            | *string*                                                             | :heavy_check_mark:                                                   | Handlebars template string                                           |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | Optional description of what this template is used for               |
| `type`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | Type categorization for the template (e.g., Universal, Email, Slack) |