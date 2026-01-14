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
    group: "<value>",
    notificationId: "<id>",
    searchId: "<id>",
    savedQueryId: "<id>",
    trigger: "<value>",
    triggerType: "resultsCount",
    triggerComparator: "!==",
    triggerCount: 5120.74,
    resultsLimit: 1045.06,
    searchUrl: "https://metallic-lox.net/",
    message: "<value>",
    authToken: "<value>",
    messagesEndpoint: "<value>",
    tenantId: "<id>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `filename`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `asyncTimeout`                                                           | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `criblVersion`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `disabled`                                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `group`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `handleSignals`                                                          | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `id`                                                                     | *"notify"*                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `loadTime`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `modTime`                                                                | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `sync`                                                                   | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `uischema`                                                               | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `version`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `schema`                                                                 | [models.FunctionConfSchemaNotify](../models/functionconfschemanotify.md) | :heavy_minus_sign:                                                       | N/A                                                                      |