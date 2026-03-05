# CompressionOptions

Controls whether the sender should send compressed data to the server. Select 'Disabled' to reject compressed connections or 'Always' to ignore server's configuration and send compressed data.

## Example Usage

```typescript
import { CompressionOptions } from "cribl-control-plane/models";

let value: CompressionOptions = "always";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"disabled" | "auto" | "always" | Unrecognized<string>
```