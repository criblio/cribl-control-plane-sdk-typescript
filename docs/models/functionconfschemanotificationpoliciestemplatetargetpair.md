# FunctionConfSchemaNotificationPoliciesTemplateTargetPair

## Example Usage

```typescript
import { FunctionConfSchemaNotificationPoliciesTemplateTargetPair } from "cribl-control-plane/models";

let value: FunctionConfSchemaNotificationPoliciesTemplateTargetPair = {
  templateId: "<id>",
  targetId: "<id>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `templateId`                           | *string*                               | :heavy_check_mark:                     | ID of the notification template to use |
| `targetId`                             | *string*                               | :heavy_check_mark:                     | ID of the notification target (output) |