# AuthenticationTypeOptionsPrometheusAuth

Remote Write authentication type

## Example Usage

```typescript
import { AuthenticationTypeOptionsPrometheusAuth } from "cribl-control-plane/models";

let value: AuthenticationTypeOptionsPrometheusAuth = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```