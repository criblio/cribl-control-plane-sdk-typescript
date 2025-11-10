# InputElasticAuthenticationMethod11

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { InputElasticAuthenticationMethod11 } from "cribl-control-plane/models";

let value: InputElasticAuthenticationMethod11 = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "manual" | "secret" | Unrecognized<string>
```