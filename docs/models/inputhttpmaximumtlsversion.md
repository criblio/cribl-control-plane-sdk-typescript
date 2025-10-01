# InputHttpMaximumTLSVersion

## Example Usage

```typescript
import { InputHttpMaximumTLSVersion } from "cribl-control-plane/models";

let value: InputHttpMaximumTLSVersion = "TLSv1.2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3" | Unrecognized<string>
```