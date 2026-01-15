# FunctionNotify

## Example Usage

```typescript
import { FunctionNotify } from "cribl-control-plane/models";

let value: FunctionNotify = {
  __filename: "example.file",
  asyncTimeout: 1105.87,
  cribl_version: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "notify",
  loadTime: 547.8,
  modTime: 2195.7,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `filename`            | *string*              | :heavy_check_mark:    | N/A                   |
| `asyncTimeout`        | *number*              | :heavy_minus_sign:    | N/A                   |
| `criblVersion`        | *string*              | :heavy_minus_sign:    | N/A                   |
| `disabled`            | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `group`               | *string*              | :heavy_check_mark:    | N/A                   |
| `handleSignals`       | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `id`                  | *"notify"*            | :heavy_check_mark:    | N/A                   |
| `loadTime`            | *number*              | :heavy_check_mark:    | N/A                   |
| `modTime`             | *number*              | :heavy_check_mark:    | N/A                   |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `sync`                | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `uischema`            | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `version`             | *string*              | :heavy_check_mark:    | N/A                   |
| `schema`              | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |