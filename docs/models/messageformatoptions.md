# MessageFormatOptions

Format to use when sending logs to Loki (Protobuf or JSON)

## Example Usage

```typescript
import { MessageFormatOptions } from "cribl-control-plane/models";

let value: MessageFormatOptions = "json";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"protobuf" | "json" | Unrecognized<string>
```