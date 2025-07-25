# LokiAuthAuthenticationType2

Loki logs authentication type

## Example Usage

```typescript
import { LokiAuthAuthenticationType2 } from "cribl-control-plane/models/operations";

let value: LokiAuthAuthenticationType2 = "textSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```