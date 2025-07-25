# InputPrometheusRwAuthenticationType

Remote Write authentication type

## Example Usage

```typescript
import { InputPrometheusRwAuthenticationType } from "cribl-control-plane/models/operations";

let value: InputPrometheusRwAuthenticationType = "textSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```