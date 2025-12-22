# OutputModeOptions

Format of the returned output

## Example Usage

```typescript
import { OutputModeOptions } from "cribl-control-plane/models";

let value: OutputModeOptions = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"csv" | "json" | Unrecognized<string>
```