# OutputLokiAuthenticationType2

## Example Usage

```typescript
import { OutputLokiAuthenticationType2 } from "cribl-control-plane/models";

let value: OutputLokiAuthenticationType2 = "credentialsSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "token" | "textSecret" | "basic" | "credentialsSecret" | Unrecognized<string>
```