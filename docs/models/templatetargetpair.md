# TemplateTargetPair

## Example Usage

```typescript
import { TemplateTargetPair } from "cribl-control-plane/models";

let value: TemplateTargetPair = {
  templateId: "<id>",
  targetId: "<id>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `templateId`                           | *string*                               | :heavy_check_mark:                     | ID of the notification template to use |
| `targetId`                             | *string*                               | :heavy_check_mark:                     | ID of the notification target (output) |