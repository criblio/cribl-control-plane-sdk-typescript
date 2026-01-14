# KafkaSchemaRegistryAuthenticationType

## Example Usage

```typescript
import { KafkaSchemaRegistryAuthenticationType } from "cribl-control-plane/models";

let value: KafkaSchemaRegistryAuthenticationType = {
  disabled: true,
  schemaRegistryURL: "https://long-term-dash.biz",
  connectionTimeout: 4131.82,
  requestTimeout: 6169.49,
  maxRetries: 6797.38,
  auth: {
    disabled: false,
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
    maxVersion: "TLSv1.3",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`                                                                                                                       | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `schemaRegistryURL`                                                                                                              | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | URL for accessing the Confluent Schema Registry. Example: http://localhost:8081. To connect over TLS, use https instead of http. |
| `connectionTimeout`                                                                                                              | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Maximum time to wait for a Schema Registry connection to complete successfully                                                   |
| `requestTimeout`                                                                                                                 | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Maximum time to wait for the Schema Registry to respond to a request                                                             |
| `maxRetries`                                                                                                                     | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Maximum number of times to try fetching schemas from the Schema Registry                                                         |
| `auth`                                                                                                                           | [models.AuthTypeKafkaSchemaRegistry](../models/authtypekafkaschemaregistry.md)                                                   | :heavy_minus_sign:                                                                                                               | Credentials to use when authenticating with the schema registry using basic HTTP authentication                                  |
| `tls`                                                                                                                            | [models.TlsSettingsClientSideTypeKafkaSchemaRegistry](../models/tlssettingsclientsidetypekafkaschemaregistry.md)                 | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |