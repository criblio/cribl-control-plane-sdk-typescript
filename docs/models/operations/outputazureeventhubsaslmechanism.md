# OutputAzureEventhubSASLMechanism

## Example Usage

```typescript
import { OutputAzureEventhubSASLMechanism } from "cribl-control-plane/models/operations";

let value: OutputAzureEventhubSASLMechanism = "plain";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"plain" | "oauthbearer" | Unrecognized<string>
```