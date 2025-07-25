# CreateInputAuthenticationKafka

Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.

## Example Usage

```typescript
import { CreateInputAuthenticationKafka } from "cribl-control-plane/models/operations";

let value: CreateInputAuthenticationKafka = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `disabled`                                                                                           | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `mechanism`                                                                                          | [operations.CreateInputSASLMechanismKafka](../../models/operations/createinputsaslmechanismkafka.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |