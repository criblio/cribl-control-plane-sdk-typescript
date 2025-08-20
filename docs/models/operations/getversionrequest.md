# GetVersionRequest

## Example Usage

```typescript
import { GetVersionRequest } from "cribl-control-plane/models/operations";

let value: GetVersionRequest = {
  group: "<value>",
  count: 7282.16,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `group`                             | *string*                            | :heavy_minus_sign:                  | Group ID                            |
| `count`                             | *number*                            | :heavy_minus_sign:                  | Maximum number of commits to return |