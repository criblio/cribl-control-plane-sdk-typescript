# UpdateOutputByIdResponse

a list of Destination objects

## Example Usage

```typescript
import { UpdateOutputByIdResponse } from "cribl-control-plane/models/operations";

let value: UpdateOutputByIdResponse = {
  count: 239271,
  items: [
    {
      id: "<id>",
      type: "kinesis",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      streamName: "<value>",
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      concurrency: 5,
      maxRecordSizeKB: 1024,
      flushPeriodSec: 1,
      compression: "gzip",
      useListShards: false,
      asNdjson: true,
      onBackpressure: "block",
      description: "punctual bandwidth utterly above since",
      awsApiKey: "<value>",
      awsSecret: "<value>",
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