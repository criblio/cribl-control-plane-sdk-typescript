# SASLTypeSASLMechanism

## Example Usage

```typescript
import { SASLTypeSASLMechanism } from "cribl-control-plane/models";

let value: SASLTypeSASLMechanism = "scram-sha-256";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"plain" | "scram-sha-256" | "scram-sha-512" | "kerberos" | Unrecognized<string>
```