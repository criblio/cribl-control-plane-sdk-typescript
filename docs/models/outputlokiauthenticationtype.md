# OutputLokiAuthenticationType

## Example Usage

```typescript
import { OutputLokiAuthenticationType } from "cribl-control-plane/models";

let value: OutputLokiAuthenticationType = "credentialsSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "token" | "textSecret" | "basic" | "credentialsSecret" | Unrecognized<string>
```