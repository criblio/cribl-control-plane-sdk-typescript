# OutputPrometheusAuthenticationType

Remote Write authentication type

## Example Usage

```typescript
import { OutputPrometheusAuthenticationType } from "cribl-control-plane/models";

let value: OutputPrometheusAuthenticationType = "oauth";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```