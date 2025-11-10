# OutputLokiAuthenticationType4

## Example Usage

```typescript
import { OutputLokiAuthenticationType4 } from "cribl-control-plane/models";

let value: OutputLokiAuthenticationType4 = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "token" | "textSecret" | "basic" | "credentialsSecret" | Unrecognized<string>
```