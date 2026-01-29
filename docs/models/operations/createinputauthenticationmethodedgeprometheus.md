# CreateInputAuthenticationMethodEdgePrometheus

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { CreateInputAuthenticationMethodEdgePrometheus } from "cribl-control-plane/models/operations";

let value: CreateInputAuthenticationMethodEdgePrometheus = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "kubernetes" | Unrecognized<string>
```