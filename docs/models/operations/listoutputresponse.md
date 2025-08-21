# ListOutputResponse

a list of Destination objects

## Example Usage

```typescript
import { ListOutputResponse } from "cribl-control-plane/models/operations";

let value: ListOutputResponse = {
  count: 196251,
  items: [
    {
      id: "<id>",
      type: "confluent_cloud",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      brokers: [
        "<value 1>",
        "<value 2>",
      ],
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
        maxVersion: "TLSv1.1",
      },
      topic: "<value>",
      ack: 1,
      format: "json",
      compression: "gzip",
      maxRecordSizeKB: 768,
      flushEventCount: 1000,
      flushPeriodSec: 1,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "http://localhost:8081",
        schemaType: "avro",
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
          minVersion: "TLSv1.3",
          maxVersion: "TLSv1.1",
        },
        defaultKeySchemaId: 34.56,
        defaultValueSchemaId: 283.94,
      },
      connectionTimeout: 10000,
      requestTimeout: 60000,
      maxRetries: 5,
      maxBackOff: 30000,
      initialBackoff: 300,
      backoffRate: 2,
      authenticationTimeout: 10000,
      reauthenticationThreshold: 10000,
      sasl: {
        disabled: true,
        mechanism: "plain",
      },
      onBackpressure: "block",
      description: "hence incidentally limited liberalize variable",
      protobufLibraryId: "<id>",
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