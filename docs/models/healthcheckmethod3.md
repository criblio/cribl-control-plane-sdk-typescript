# HealthCheckMethod3

Health check HTTP method.

## Example Usage

```typescript
import { HealthCheckMethod3 } from "cribl-control-plane/models";

let value: HealthCheckMethod3 = "post_with_body";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"get" | "post" | "post_with_body" | Unrecognized<string>
```