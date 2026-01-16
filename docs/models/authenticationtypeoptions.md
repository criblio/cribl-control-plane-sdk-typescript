# AuthenticationTypeOptions

OpenTelemetry authentication type

## Example Usage

```typescript
import { AuthenticationTypeOptions } from "cribl-control-plane/models";

let value: AuthenticationTypeOptions = "oauth";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```