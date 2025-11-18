# InputSASLMechanismConfluentCloud

## Example Usage

```typescript
import { InputSASLMechanismConfluentCloud } from "cribl-control-plane/models";

let value: InputSASLMechanismConfluentCloud = "scram-sha-512";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"plain" | "scram-sha-256" | "scram-sha-512" | "kerberos" | Unrecognized<string>
```