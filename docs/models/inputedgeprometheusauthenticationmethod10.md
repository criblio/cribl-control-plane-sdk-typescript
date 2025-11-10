# InputEdgePrometheusAuthenticationMethod10

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { InputEdgePrometheusAuthenticationMethod10 } from "cribl-control-plane/models";

let value: InputEdgePrometheusAuthenticationMethod10 = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "kubernetes" | Unrecognized<string>
```