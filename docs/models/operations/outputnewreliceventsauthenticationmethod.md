# OutputNewrelicEventsAuthenticationMethod

Enter API key directly, or select a stored secret

## Example Usage

```typescript
import { OutputNewrelicEventsAuthenticationMethod } from "cribl-control-plane/models/operations";

let value: OutputNewrelicEventsAuthenticationMethod = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```