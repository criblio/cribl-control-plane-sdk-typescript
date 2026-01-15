# PipelineFunctionDnsLookup

## Example Usage

```typescript
import { PipelineFunctionDnsLookup } from "cribl-control-plane/models";

let value: PipelineFunctionDnsLookup = {
  filter: "<value>",
  id: "dns_lookup",
  description: "below euphonium antagonize haversack",
  disabled: false,
  final: true,
  conf: {
    dnsLookupFields: [
      {
        inFieldName: "<value>",
        resourceRecordType: "A",
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
    cacheTTL: 1409.72,
    maxCacheSize: 8252.84,
    useResolvConf: true,
    lookupFallback: false,
    domainOverrides: [
      "<value 1>",
      "<value 2>",
    ],
    lookupFailLogLevel: "debug",
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"dns_lookup"*                                                                               | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.FunctionConfSchemaDnsLookup](../models/functionconfschemadnslookup.md)               | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |