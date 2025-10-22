# Action

## Example Usage

```typescript
import { Action } from "cribl-control-plane/models";

let value: Action = {
  label: "<value>",
  params: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  target: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `label`                  | *string*                 | :heavy_check_mark:       | N/A                      |
| `params`                 | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |
| `target`                 | *string*                 | :heavy_check_mark:       | N/A                      |