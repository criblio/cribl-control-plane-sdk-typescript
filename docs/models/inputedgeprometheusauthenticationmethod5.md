# InputEdgePrometheusAuthenticationMethod5

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { InputEdgePrometheusAuthenticationMethod5 } from "cribl-control-plane/models";

let value: InputEdgePrometheusAuthenticationMethod5 = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "kubernetes" | Unrecognized<string>
```