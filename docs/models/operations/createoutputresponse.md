# CreateOutputResponse

a list of Destination objects

## Example Usage

```typescript
import { CreateOutputResponse } from "cribl-control-plane/models/operations";

let value: CreateOutputResponse = {
  count: 654123,
  items: [
    {
      id: "<id>",
      type: "statsd",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      protocol: "udp",
      host: "frail-postbox.biz",
      port: 8125,
      mtu: 512,
      flushPeriodSec: 1,
      dnsResolvePeriodSec: 0,
      description:
        "abaft whose strident violently remark aged during forgo cute",
      throttleRatePerSec: "0",
      connectionTimeout: 10000,
      writeTimeout: 60000,
      onBackpressure: "block",
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqMode: "error",
      pqControls: {},
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Output*[]                          | :heavy_minus_sign:                         | N/A                                        |