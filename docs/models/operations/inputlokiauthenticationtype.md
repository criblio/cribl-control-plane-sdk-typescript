# InputLokiAuthenticationType

Loki logs authentication type

## Example Usage

```typescript
import { InputLokiAuthenticationType } from "cribl-control-plane/models/operations";

let value: InputLokiAuthenticationType = "token";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```