# CompressCompressionSplunkLb

Controls whether the sender should send compressed data to the server. Select 'Disabled' to reject compressed connections or 'Always' to ignore server's configuration and send compressed data.

## Example Usage

```typescript
import { CompressCompressionSplunkLb } from "cribl-control-plane/models/operations";

let value: CompressCompressionSplunkLb = "auto";
```

## Values

```typescript
"disabled" | "auto" | "always"
```