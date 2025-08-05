# OutputConfluentCloudKafkaSchemaRegistryAuthentication

## Example Usage

```typescript
import { OutputConfluentCloudKafkaSchemaRegistryAuthentication } from "cribl-control-plane/models";

let value: OutputConfluentCloudKafkaSchemaRegistryAuthentication = {
  auth: {
    credentialsSecret: "<value>",
  },
  tls: {
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.3",
  },
  defaultKeySchemaId: 3208.94,
  defaultValueSchemaId: 90.17,
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `disabled`                                                                                                                                       | *boolean*                                                                                                                                        | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `schemaRegistryURL`                                                                                                                              | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | URL for accessing the Confluent Schema Registry. Example: http://localhost:8081. To connect over TLS, use https instead of http.                 |
| `connectionTimeout`                                                                                                                              | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Maximum time to wait for a Schema Registry connection to complete successfully                                                                   |
| `requestTimeout`                                                                                                                                 | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Maximum time to wait for the Schema Registry to respond to a request                                                                             |
| `maxRetries`                                                                                                                                     | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Maximum number of times to try fetching schemas from the Schema Registry                                                                         |
| `auth`                                                                                                                                           | [models.OutputConfluentCloudAuth](../models/outputconfluentcloudauth.md)                                                                         | :heavy_minus_sign:                                                                                                                               | Credentials to use when authenticating with the schema registry using basic HTTP authentication                                                  |
| `tls`                                                                                                                                            | [models.OutputConfluentCloudKafkaSchemaRegistryTLSSettingsClientSide](../models/outputconfluentcloudkafkaschemaregistrytlssettingsclientside.md) | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `defaultKeySchemaId`                                                                                                                             | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Used when __keySchemaIdOut is not present, to transform key values, leave blank if key transformation is not required by default.                |
| `defaultValueSchemaId`                                                                                                                           | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Used when __valueSchemaIdOut is not present, to transform _raw, leave blank if value transformation is not required by default.                  |