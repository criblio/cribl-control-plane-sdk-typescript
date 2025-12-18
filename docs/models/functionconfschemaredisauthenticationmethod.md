# FunctionConfSchemaRedisAuthenticationMethod

## Example Usage

```typescript
import { FunctionConfSchemaRedisAuthenticationMethod } from "cribl-control-plane/models";

let value: FunctionConfSchemaRedisAuthenticationMethod = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "manual" | "credentialsSecret" | "textSecret" | Unrecognized<string>
```