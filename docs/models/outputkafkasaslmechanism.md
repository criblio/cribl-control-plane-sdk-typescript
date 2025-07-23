# OutputKafkaSASLMechanism

## Example Usage

```typescript
import { OutputKafkaSASLMechanism } from "cribl-control-plane/models";

let value: OutputKafkaSASLMechanism = "plain";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"plain" | "scram-sha-256" | "scram-sha-512" | "kerberos" | Unrecognized<string>
```