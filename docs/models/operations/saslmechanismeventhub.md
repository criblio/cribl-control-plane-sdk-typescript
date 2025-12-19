# SASLMechanismEventhub

## Example Usage

```typescript
import { SASLMechanismEventhub } from "cribl-control-plane/models/operations";

let value: SASLMechanismEventhub = "plain";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"plain" | "oauthbearer" | Unrecognized<string>
```