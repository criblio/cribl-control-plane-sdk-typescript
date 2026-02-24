# FunctionXmlUnroll

## Example Usage

```typescript
import { FunctionXmlUnroll } from "cribl-control-plane/models";

let value: FunctionXmlUnroll = {
  __filename: "example.file",
  group: "<value>",
  id: "xml_unroll",
  loadTime: 3949.24,
  modTime: 6048.36,
  name: "<value>",
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
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
| `id`                  | *"xml_unroll"*        | :heavy_check_mark:    | N/A                   |
| `loadTime`            | *number*              | :heavy_check_mark:    | N/A                   |
| `modTime`             | *number*              | :heavy_check_mark:    | N/A                   |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `sync`                | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `uischema`            | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `version`             | *string*              | :heavy_check_mark:    | N/A                   |
| `schema`              | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |