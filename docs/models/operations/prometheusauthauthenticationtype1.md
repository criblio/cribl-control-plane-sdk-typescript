# PrometheusAuthAuthenticationType1

Remote Write authentication type

## Example Usage

```typescript
import { PrometheusAuthAuthenticationType1 } from "cribl-control-plane/models/operations";

let value: PrometheusAuthAuthenticationType1 = "textSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```