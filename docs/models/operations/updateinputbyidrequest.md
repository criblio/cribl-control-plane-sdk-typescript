# UpdateInputByIdRequest

## Example Usage

```typescript
import { UpdateInputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateInputByIdRequest = {
  id: "<id>",
  input: {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "kinesis",
    disabled: false,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    streamName: "<value>",
    serviceInterval: 1,
    shardExpr: "true",
    shardIteratorType: "TRIM_HORIZON",
    payloadFormat: "cribl",
    getRecordsLimit: 5000,
    getRecordsLimitTotal: 20000,
    loadBalancingAlgorithm: "ConsistentHashing",
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
    verifyKPLCheckSums: false,
    avoidDuplicates: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "to furthermore meh charm ack why fortunate complete",
    awsApiKey: "<value>",
    awsSecret: "<value>",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Source to update. |
| `input`                                      | *models.Input*                               | :heavy_check_mark:                           | Input object                                 |