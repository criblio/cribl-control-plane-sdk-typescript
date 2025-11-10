# PrometheusAuthTypeAuthenticationType

Remote Write authentication type

## Example Usage

```typescript
import { PrometheusAuthTypeAuthenticationType } from "cribl-control-plane/models";

let value: PrometheusAuthTypeAuthenticationType = "oauth";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```