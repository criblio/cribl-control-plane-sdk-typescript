# OutputMode4

Format of the returned output

## Example Usage

```typescript
import { OutputMode4 } from "cribl-control-plane/models";

let value: OutputMode4 = "csv";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"csv" | "json" | Unrecognized<string>
```