# PipelineFunctionHandlebarsTemplateDefinition

## Example Usage

```typescript
import { PipelineFunctionHandlebarsTemplateDefinition } from "cribl-control-plane/models";

let value: PipelineFunctionHandlebarsTemplateDefinition = {
  id: "<id>",
  content: "<value>",
  description:
    "tune even nearly possible octave pointed unfreeze foolishly circa",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | Unique identifier for this template                                  |
| `content`                                                            | *string*                                                             | :heavy_check_mark:                                                   | Handlebars template string                                           |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | Optional description of what this template is used for               |
| `type`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | Type categorization for the template (e.g., Universal, Email, Slack) |