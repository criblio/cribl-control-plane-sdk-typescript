# InputEdgePrometheusAuthTypeAuthenticationMethod

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { InputEdgePrometheusAuthTypeAuthenticationMethod } from "cribl-control-plane/models";

let value: InputEdgePrometheusAuthTypeAuthenticationMethod = "kubernetes";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "kubernetes" | Unrecognized<string>
```