# UpdateOutputByIdRequest

## Example Usage

```typescript
import { UpdateOutputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateOutputByIdRequest = {
  id: "<id>",
  output: {
    id: "<id>",
    type: "sqs",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    queueName: "<value>",
    queueType: "standard",
    awsAccountId: "<id>",
    messageGroupId: "cribl",
    createQueue: true,
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
    maxQueueSize: 100,
    maxRecordSizeKB: 256,
    flushPeriodSec: 1,
    maxInProgress: 10,
    onBackpressure: "block",
    description:
      "orderly marten realistic hungrily apprehensive phooey subdued",
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
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *string*                         | :heavy_check_mark:               | Unique ID to PATCH               |
| `output`                         | *models.Output*                  | :heavy_check_mark:               | Destination object to be updated |