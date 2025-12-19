# CreateOutputAuthenticationTypeLoki

## Example Usage

```typescript
import { CreateOutputAuthenticationTypeLoki } from "cribl-control-plane/models/operations";

let value: CreateOutputAuthenticationTypeLoki = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "token" | "textSecret" | "basic" | "credentialsSecret" | Unrecognized<string>
```