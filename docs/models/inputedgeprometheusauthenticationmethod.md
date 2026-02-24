# InputEdgePrometheusAuthenticationMethod

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { InputEdgePrometheusAuthenticationMethod } from "cribl-control-plane/models";

let value: InputEdgePrometheusAuthenticationMethod = "kubernetes";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "kubernetes" | Unrecognized<string>
```