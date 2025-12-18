# FunctionDnsLookup

## Example Usage

```typescript
import { FunctionDnsLookup } from "cribl-control-plane/models";

let value: FunctionDnsLookup = {
  filename: "example.file",
  asyncTimeout: 8310.14,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "dns_lookup",
  loadTime: 3614.94,
  modTime: 6338.43,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    dnsLookupFields: [
      {
        inFieldName: "<value>",
        outFieldName: "<value>",
      },
    ],
    reverseLookupFields: [
      {
        inFieldName: "<value>",
        outFieldName: "<value>",
      },
    ],
    dnsServers: [
      "<value 1>",
    ],
    domainOverrides: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `filename`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `asyncTimeout`                                                                 | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `criblVersion`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `disabled`                                                                     | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `group`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `handleSignals`                                                                | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | *"dns_lookup"*                                                                 | :heavy_check_mark:                                                             | N/A                                                                            |
| `loadTime`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `modTime`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `sync`                                                                         | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `uischema`                                                                     | Record<string, *any*>                                                          | :heavy_check_mark:                                                             | N/A                                                                            |
| `version`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `schema`                                                                       | [models.FunctionConfSchemaDnsLookup](../models/functionconfschemadnslookup.md) | :heavy_minus_sign:                                                             | N/A                                                                            |