# InputElasticAuthenticationMethod6

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { InputElasticAuthenticationMethod6 } from "cribl-control-plane/models";

let value: InputElasticAuthenticationMethod6 = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "manual" | "secret" | Unrecognized<string>
```