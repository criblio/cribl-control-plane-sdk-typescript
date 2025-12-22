# InputKafkaAuthenticationMethod

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { InputKafkaAuthenticationMethod } from "cribl-control-plane/models";

let value: InputKafkaAuthenticationMethod = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```