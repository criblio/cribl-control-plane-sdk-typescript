# HealthCheckMethod7

Health check HTTP method.

## Example Usage

```typescript
import { HealthCheckMethod7 } from "cribl-control-plane/models";

let value: HealthCheckMethod7 = "post";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"get" | "post" | "post_with_body" | Unrecognized<string>
```