# InputSplunkCompression

Controls whether to support reading compressed data from a forwarder. Select 'Automatic' to match the forwarder's configuration, or 'Disabled' to reject compressed connections.

## Example Usage

```typescript
import { InputSplunkCompression } from "cribl-control-plane/models";

let value: InputSplunkCompression = "disabled";
```

## Values

```typescript
"disabled" | "auto" | "always"
```