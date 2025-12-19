# LogLabel

## Example Usage

```typescript
import { LogLabel } from "cribl-control-plane/models/operations";

let value: LogLabel = {
  label: "<value>",
  valueExpression: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `label`                                             | *string*                                            | :heavy_check_mark:                                  | Label name                                          |
| `valueExpression`                                   | *string*                                            | :heavy_check_mark:                                  | JavaScript expression to compute the label's value. |