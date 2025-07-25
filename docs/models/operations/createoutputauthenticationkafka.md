# CreateOutputAuthenticationKafka

Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.

## Example Usage

```typescript
import { CreateOutputAuthenticationKafka } from "cribl-control-plane/models/operations";

let value: CreateOutputAuthenticationKafka = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `disabled`                                                                                             | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `mechanism`                                                                                            | [operations.CreateOutputSASLMechanismKafka](../../models/operations/createoutputsaslmechanismkafka.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |