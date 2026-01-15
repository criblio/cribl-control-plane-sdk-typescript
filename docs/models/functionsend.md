# FunctionSend

## Example Usage

```typescript
import { FunctionSend } from "cribl-control-plane/models";

let value: FunctionSend = {
  __filename: "example.file",
  asyncTimeout: 6106.71,
  cribl_version: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "send",
  loadTime: 171.47,
  modTime: 5706.19,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    url: "https://somber-feather.name",
    group: "<value>",
    workspace: "<value>",
    sendUrlTemplate: "<value>",
    searchId: "<id>",
    tee: false,
    flushMs: 5284.9,
    suppressPreviews: false,
    mode: "sender",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `filename`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `asyncTimeout`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `criblVersion`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `disabled`                                                           | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `group`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `handleSignals`                                                      | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `id`                                                                 | *"send"*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `loadTime`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `modTime`                                                            | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `sync`                                                               | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `uischema`                                                           | Record<string, *any*>                                                | :heavy_check_mark:                                                   | N/A                                                                  |
| `version`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `schema`                                                             | [models.FunctionConfSchemaSend](../models/functionconfschemasend.md) | :heavy_minus_sign:                                                   | N/A                                                                  |