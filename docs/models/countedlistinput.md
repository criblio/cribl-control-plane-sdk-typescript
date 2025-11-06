# CountedListInput

## Example Usage

```typescript
import { CountedListInput } from "cribl-control-plane/models";

let value: CountedListInput = {
  count: 747277,
  items: [
    {
      id: "<id>",
      type: "msk",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
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
      brokers: [
        "<value 1>",
        "<value 2>",
      ],
      topics: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      groupId: "Cribl",
      fromBeginning: true,
      sessionTimeout: 30000,
      rebalanceTimeout: 60000,
      heartbeatInterval: 3000,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "http://localhost:8081",
        connectionTimeout: 30000,
        requestTimeout: 30000,
        maxRetries: 1,
        auth: {
          disabled: true,
          credentialsSecret: "<value>",
        },
        tls: {
          disabled: true,
          rejectUnauthorized: true,
          servername: "<value>",
          certificateName: "<value>",
          caPath: "<value>",
          privKeyPath: "<value>",
          certPath: "<value>",
          passphrase: "<value>",
          minVersion: "TLSv1.1",
          maxVersion: "TLSv1",
        },
      },
      connectionTimeout: 10000,
      requestTimeout: 60000,
      maxRetries: 5,
      maxBackOff: 30000,
      initialBackoff: 300,
      backoffRate: 2,
      authenticationTimeout: 10000,
      reauthenticationThreshold: 10000,
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
      tls: {
        disabled: false,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1",
      },
      autoCommitInterval: 7691.41,
      autoCommitThreshold: 7239.53,
      maxBytesPerPartition: 1048576,
      maxBytes: 10485760,
      maxSocketErrors: 0,
      description:
        "dual yarmulke generously fraternise eventually famously genuine multicolored excepting",
      awsApiKey: "<value>",
      awsSecret: "<value>",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |