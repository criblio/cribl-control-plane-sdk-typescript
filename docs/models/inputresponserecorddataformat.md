# InputResponseRecordDataFormat

Format of data inside the Kinesis Stream records. Gzip compression is automatically detected.

## Example Usage

```typescript
import { InputResponseRecordDataFormat } from "cribl-control-plane/models";

let value: InputResponseRecordDataFormat = "ndjson";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"cribl" | "ndjson" | "cloudwatch" | "line" | Unrecognized<string>
```