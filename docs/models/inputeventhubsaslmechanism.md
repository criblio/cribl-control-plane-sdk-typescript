# InputEventhubSASLMechanism

## Example Usage

```typescript
import { InputEventhubSASLMechanism } from "cribl-control-plane/models";

let value: InputEventhubSASLMechanism = "plain";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"plain" | "oauthbearer" | Unrecognized<string>
```