# SecureVersion

## Example Usage

```typescript
import { SecureVersion } from "cribl-control-plane/models";

let value: SecureVersion = "TLSv1.2";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TLSv1.3" | "TLSv1.2" | "TLSv1.1" | "TLSv1" | Unrecognized<string>
```