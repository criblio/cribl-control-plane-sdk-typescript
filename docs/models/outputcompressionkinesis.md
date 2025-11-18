# OutputCompressionKinesis

Compression type to use for records

## Example Usage

```typescript
import { OutputCompressionKinesis } from "cribl-control-plane/models";

let value: OutputCompressionKinesis = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```