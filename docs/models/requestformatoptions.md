# RequestFormatOptions

When set to JSON, the event is automatically formatted with required fields before sending. When set to Raw, only the event's `_raw` value is sent.

## Example Usage

```typescript
import { RequestFormatOptions } from "cribl-control-plane/models";

let value: RequestFormatOptions = "raw";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"JSON" | "raw" | Unrecognized<string>
```