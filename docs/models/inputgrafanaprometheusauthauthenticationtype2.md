# InputGrafanaPrometheusAuthAuthenticationType2

Remote Write authentication type

## Example Usage

```typescript
import { InputGrafanaPrometheusAuthAuthenticationType2 } from "cribl-control-plane/models";

let value: InputGrafanaPrometheusAuthAuthenticationType2 = "token";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```