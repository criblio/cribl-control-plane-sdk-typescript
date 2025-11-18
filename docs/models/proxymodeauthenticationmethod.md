# ProxyModeAuthenticationMethod

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { ProxyModeAuthenticationMethod } from "cribl-control-plane/models";

let value: ProxyModeAuthenticationMethod = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "manual" | "secret" | Unrecognized<string>
```