# EventFormat

Format of individual events

## Example Usage

```typescript
import { EventFormat } from "cribl-control-plane/models";

let value: EventFormat = "json";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json" | "xml" | Unrecognized<string>
```