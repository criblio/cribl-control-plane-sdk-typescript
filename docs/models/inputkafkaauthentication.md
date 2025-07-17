# InputKafkaAuthentication

Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.

## Example Usage

```typescript
import { InputKafkaAuthentication } from "cribl-control-plane/models";

let value: InputKafkaAuthentication = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `disabled`                                                             | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `mechanism`                                                            | [models.InputKafkaSASLMechanism](../models/inputkafkasaslmechanism.md) | :heavy_minus_sign:                                                     | N/A                                                                    |