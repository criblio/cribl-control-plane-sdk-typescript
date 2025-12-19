# CreateInputSASLMechanismKafka

## Example Usage

```typescript
import { CreateInputSASLMechanismKafka } from "cribl-control-plane/models/operations";

let value: CreateInputSASLMechanismKafka = "plain";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"plain" | "scram-sha-256" | "scram-sha-512" | "kerberos" | Unrecognized<string>
```