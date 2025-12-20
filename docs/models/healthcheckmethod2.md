# HealthCheckMethod2

Health check HTTP method.

## Example Usage

```typescript
import { HealthCheckMethod2 } from "cribl-control-plane/models";

let value: HealthCheckMethod2 = "get";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"get" | "post" | "post_with_body" | Unrecognized<string>
```