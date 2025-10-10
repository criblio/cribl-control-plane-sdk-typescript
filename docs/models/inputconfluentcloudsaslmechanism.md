# InputConfluentCloudSASLMechanism

## Example Usage

```typescript
import { InputConfluentCloudSASLMechanism } from "cribl-control-plane/models";

let value: InputConfluentCloudSASLMechanism = "kerberos";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"plain" | "scram-sha-256" | "scram-sha-512" | "kerberos" | Unrecognized<string>
```