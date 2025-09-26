# OutputRingDataFormat

Format of the output data.

## Example Usage

```typescript
import { OutputRingDataFormat } from "cribl-control-plane/models";

let value: OutputRingDataFormat = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | Unrecognized<string>
```