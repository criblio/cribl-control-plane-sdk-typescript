# PrometheusAuthAuthenticationType2

Remote Write authentication type

## Example Usage

```typescript
import { PrometheusAuthAuthenticationType2 } from "cribl-control-plane/models";

let value: PrometheusAuthAuthenticationType2 = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```