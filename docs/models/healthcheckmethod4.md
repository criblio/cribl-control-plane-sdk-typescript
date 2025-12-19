# HealthCheckMethod4

Health check HTTP method.

## Example Usage

```typescript
import { HealthCheckMethod4 } from "cribl-control-plane/models";

let value: HealthCheckMethod4 = "get";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"get" | "post" | "post_with_body" | Unrecognized<string>
```