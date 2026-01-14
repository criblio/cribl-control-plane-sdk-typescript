# PipelineFunctionRedisAuthenticationMethod

## Example Usage

```typescript
import { PipelineFunctionRedisAuthenticationMethod } from "cribl-control-plane/models";

let value: PipelineFunctionRedisAuthenticationMethod = "credentialsSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "manual" | "credentialsSecret" | "textSecret" | Unrecognized<string>
```