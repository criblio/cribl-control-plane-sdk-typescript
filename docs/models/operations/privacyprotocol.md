# PrivacyProtocol

## Example Usage

```typescript
import { PrivacyProtocol } from "cribl-control-plane/models/operations";

let value: PrivacyProtocol = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "des" | "aes" | "aes256b" | "aes256r" | Unrecognized<string>
```