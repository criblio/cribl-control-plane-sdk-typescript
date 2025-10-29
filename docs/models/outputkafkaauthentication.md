# OutputKafkaAuthentication

Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.

## Example Usage

```typescript
import { OutputKafkaAuthentication } from "cribl-control-plane/models";

let value: OutputKafkaAuthentication = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `disabled`                                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `mechanism`                                                              | [models.OutputKafkaSASLMechanism](../models/outputkafkasaslmechanism.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `oauthEnabled`                                                           | *boolean*                                                                | :heavy_minus_sign:                                                       | Enable OAuth authentication                                              |