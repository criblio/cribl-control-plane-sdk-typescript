# OutputAuthenticationTypeLoki

## Example Usage

```typescript
import { OutputAuthenticationTypeLoki } from "cribl-control-plane/models";

let value: OutputAuthenticationTypeLoki = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "token" | "textSecret" | "basic" | "credentialsSecret" | Unrecognized<string>
```