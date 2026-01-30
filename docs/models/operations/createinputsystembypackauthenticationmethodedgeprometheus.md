# CreateInputSystemByPackAuthenticationMethodEdgePrometheus

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { CreateInputSystemByPackAuthenticationMethodEdgePrometheus } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackAuthenticationMethodEdgePrometheus = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "kubernetes" | Unrecognized<string>
```