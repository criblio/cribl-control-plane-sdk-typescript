# OutputLokiAuthenticationType3

## Example Usage

```typescript
import { OutputLokiAuthenticationType3 } from "cribl-control-plane/models";

let value: OutputLokiAuthenticationType3 = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "token" | "textSecret" | "basic" | "credentialsSecret" | Unrecognized<string>
```