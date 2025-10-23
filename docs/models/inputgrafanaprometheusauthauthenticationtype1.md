# InputGrafanaPrometheusAuthAuthenticationType1

Remote Write authentication type

## Example Usage

```typescript
import { InputGrafanaPrometheusAuthAuthenticationType1 } from "cribl-control-plane/models";

let value: InputGrafanaPrometheusAuthAuthenticationType1 = "oauth";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```