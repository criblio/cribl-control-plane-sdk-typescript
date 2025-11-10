# LogLabelsType

## Example Usage

```typescript
import { LogLabelsType } from "cribl-control-plane/models";

let value: LogLabelsType = {
  label: "<value>",
  valueExpression: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `label`                                             | *string*                                            | :heavy_check_mark:                                  | Label name                                          |
| `valueExpression`                                   | *string*                                            | :heavy_check_mark:                                  | JavaScript expression to compute the label's value. |