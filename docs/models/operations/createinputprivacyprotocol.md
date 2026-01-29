# CreateInputPrivacyProtocol

## Example Usage

```typescript
import { CreateInputPrivacyProtocol } from "cribl-control-plane/models/operations";

let value: CreateInputPrivacyProtocol = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "des" | "aes" | "aes256b" | "aes256r" | Unrecognized<string>
```