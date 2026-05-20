# LogLabelConfOutputGoogleCloudLogging

## Example Usage

```typescript
import { LogLabelConfOutputGoogleCloudLogging } from "cribl-control-plane/models";

let value: LogLabelConfOutputGoogleCloudLogging = {
  label: "<value>",
  valueExpression: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `label`                                             | *string*                                            | :heavy_check_mark:                                  | Label name                                          |
| `valueExpression`                                   | *string*                                            | :heavy_check_mark:                                  | JavaScript expression to compute the label's value. |