# OutputKafkaAuthenticationMethod

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { OutputKafkaAuthenticationMethod } from "cribl-control-plane/models";

let value: OutputKafkaAuthenticationMethod = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```