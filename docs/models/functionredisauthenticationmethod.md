# FunctionRedisAuthenticationMethod

## Example Usage

```typescript
import { FunctionRedisAuthenticationMethod } from "cribl-control-plane/models";

let value: FunctionRedisAuthenticationMethod = "textSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "manual" | "credentialsSecret" | "textSecret" | Unrecognized<string>
```