# AddHecTokenRequest

## Example Usage

```typescript
import { AddHecTokenRequest } from "cribl-control-plane/models";

let value: AddHecTokenRequest = {
  token: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `allowedIndexesAtToken`                                                | *string*[]                                                             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `enabled`                                                              | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `metadata`                                                             | [models.EventBreakerRuleFields](../models/eventbreakerrulefields.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |
| `token`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |