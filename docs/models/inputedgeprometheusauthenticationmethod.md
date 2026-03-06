# InputEdgePrometheusAuthenticationMethod

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { InputEdgePrometheusAuthenticationMethod } from "cribl-control-plane/models";

let value: InputEdgePrometheusAuthenticationMethod = "kubernetes";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"manual" | "secret" | "kubernetes" | Unrecognized<string>
```