# AuthenticationTypePrometheus

Remote Write authentication type

## Example Usage

```typescript
import { AuthenticationTypePrometheus } from "cribl-control-plane/models/operations";

let value: AuthenticationTypePrometheus = "credentialsSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```