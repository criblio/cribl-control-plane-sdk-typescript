# GetOutputByIdResponse

a list of Destination objects

## Example Usage

```typescript
import { GetOutputByIdResponse } from "cribl-control-plane/models/operations";

let value: GetOutputByIdResponse = {
  count: 860587,
  items: [
    {
      id: "<id>",
      type: "google_cloud_logging",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      logLocationType: "project",
      logNameExpression: "<value>",
      sanitizeLogNames: false,
      payloadFormat: "text",
      logLabels: [
        {
          label: "<value>",
          valueExpression: "<value>",
        },
      ],
      resourceTypeExpression: "<value>",
      resourceTypeLabels: [
        {
          label: "<value>",
          valueExpression: "<value>",
        },
      ],
      severityExpression: "<value>",
      insertIdExpression: "<value>",
      googleAuthMethod: "manual",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      flushPeriodSec: 1,
      concurrency: 5,
      connectionTimeout: 10000,
      timeoutSec: 30,
      throttleRateReqPerSec: 110770,
      requestMethodExpression: "<value>",
      requestUrlExpression: "<value>",
      requestSizeExpression: "<value>",
      statusExpression: "<value>",
      responseSizeExpression: "<value>",
      userAgentExpression: "<value>",
      remoteIpExpression: "<value>",
      serverIpExpression: "<value>",
      refererExpression: "<value>",
      latencyExpression: "<value>",
      cacheLookupExpression: "<value>",
      cacheHitExpression: "<value>",
      cacheValidatedExpression: "<value>",
      cacheFillBytesExpression: "<value>",
      protocolExpression: "<value>",
      idExpression: "<value>",
      producerExpression: "<value>",
      firstExpression: "<value>",
      lastExpression: "<value>",
      fileExpression: "<value>",
      lineExpression: "<value>",
      functionExpression: "<value>",
      uidExpression: "<value>",
      indexExpression: "<value>",
      totalSplitsExpression: "<value>",
      traceExpression: "<value>",
      spanIdExpression: "<value>",
      traceSampledExpression: "<value>",
      onBackpressure: "block",
      totalMemoryLimitKB: 2036.9,
      description: "though worth till indeed around",
      logLocationExpression: "<value>",
      payloadExpression: "<value>",
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