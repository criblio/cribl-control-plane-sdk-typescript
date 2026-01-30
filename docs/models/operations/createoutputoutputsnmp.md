# CreateOutputOutputSnmp

## Example Usage

```typescript
import { CreateOutputOutputSnmp } from "cribl-control-plane/models/operations";

let value: CreateOutputOutputSnmp = {
  id: "<id>",
  type: "snmp",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  hosts: [
    {
      host: "royal-heartbeat.net",
      port: 2513.7,
      __template_host: "<value>",
      __template_port: "<value>",
    },
  ],
  dnsResolvePeriodSec: 8130.88,
  description:
    "never immediately independence superficial following those astride failing wherever bicycle",
};
```

## Fields

| Field                                                                                                                                                                     | Type                                                                                                                                                                      | Required                                                                                                                                                                  | Description                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                      | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | Unique ID for this output                                                                                                                                                 |
| `type`                                                                                                                                                                    | *"snmp"*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `pipeline`                                                                                                                                                                | *string*                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                        | Pipeline to process data before sending out to this output                                                                                                                |
| `systemFields`                                                                                                                                                            | *string*[]                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                        | Fields to automatically add to events, such as cribl_pipe. Supports wildcards.                                                                                            |
| `environment`                                                                                                                                                             | *string*                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                        | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.                                                                      |
| `streamtags`                                                                                                                                                              | *string*[]                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                        | Tags for filtering and grouping in @{product}                                                                                                                             |
| `hosts`                                                                                                                                                                   | [operations.CreateOutputHostSnmp](../../models/operations/createoutputhostsnmp.md)[]                                                                                      | :heavy_check_mark:                                                                                                                                                        | One or more SNMP destinations to forward traps to                                                                                                                         |
| `dnsResolvePeriodSec`                                                                                                                                                     | *number*                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                        | How often to resolve the destination hostname to an IP address. Ignored if all destinations are IP addresses. A value of 0 means every trap sent will incur a DNS lookup. |
| `description`                                                                                                                                                             | *string*                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                        | N/A                                                                                                                                                                       |