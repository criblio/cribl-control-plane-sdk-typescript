# InputKafkaMinimumTLSVersion

## Example Usage

```typescript
import { InputKafkaMinimumTLSVersion } from "cribl-control-plane/models/operations";

let value: InputKafkaMinimumTLSVersion = "TLSv1.1";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3" | Unrecognized<string>
```