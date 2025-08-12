# InputConfluentCloudKafkaSchemaRegistryAuthentication

## Example Usage

```typescript
import { InputConfluentCloudKafkaSchemaRegistryAuthentication } from "cribl-control-plane/models";

let value: InputConfluentCloudKafkaSchemaRegistryAuthentication = {
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
    minVersion: "TLSv1.3",
    maxVersion: "TLSv1.2",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`                                                                                                                                     | *boolean*                                                                                                                                      | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `schemaRegistryURL`                                                                                                                            | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | URL for accessing the Confluent Schema Registry. Example: http://localhost:8081. To connect over TLS, use https instead of http.               |
| `schemaType`                                                                                                                                   | [models.InputConfluentCloudSchemaType](../models/inputconfluentcloudschematype.md)                                                             | :heavy_minus_sign:                                                                                                                             | The schema format used to encode and decode event data                                                                                         |
| `connectionTimeout`                                                                                                                            | *number*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Maximum time to wait for a Schema Registry connection to complete successfully                                                                 |
| `requestTimeout`                                                                                                                               | *number*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Maximum time to wait for the Schema Registry to respond to a request                                                                           |
| `maxRetries`                                                                                                                                   | *number*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Maximum number of times to try fetching schemas from the Schema Registry                                                                       |
| `auth`                                                                                                                                         | [models.InputConfluentCloudAuth](../models/inputconfluentcloudauth.md)                                                                         | :heavy_minus_sign:                                                                                                                             | Credentials to use when authenticating with the schema registry using basic HTTP authentication                                                |
| `tls`                                                                                                                                          | [models.InputConfluentCloudKafkaSchemaRegistryTLSSettingsClientSide](../models/inputconfluentcloudkafkaschemaregistrytlssettingsclientside.md) | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |