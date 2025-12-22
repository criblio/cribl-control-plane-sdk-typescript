# AuthenticationTypePrometheusRw

Remote Write authentication type

## Example Usage

```typescript
import { AuthenticationTypePrometheusRw } from "cribl-control-plane/models/operations";

let value: AuthenticationTypePrometheusRw = "token";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```