# OutputMode

Format of the returned output

## Example Usage

```typescript
import { OutputMode } from "cribl-control-plane/models";

let value: OutputMode = "csv";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"csv" | "json" | Unrecognized<string>
```