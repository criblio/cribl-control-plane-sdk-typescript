# AuthenticationMethodNewrelicEvents

Enter API key directly, or select a stored secret

## Example Usage

```typescript
import { AuthenticationMethodNewrelicEvents } from "cribl-control-plane/models";

let value: AuthenticationMethodNewrelicEvents = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```