# OutputKafkaAuthentication

Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.

## Example Usage

```typescript
import { OutputKafkaAuthentication } from "cribl-control-plane/models/operations";

let value: OutputKafkaAuthentication = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `disabled`                                                                                 | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `mechanism`                                                                                | [operations.OutputKafkaSASLMechanism](../../models/operations/outputkafkasaslmechanism.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |