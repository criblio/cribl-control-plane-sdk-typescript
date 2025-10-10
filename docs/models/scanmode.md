# ScanMode

## Example Usage

```typescript
import { ScanMode } from "cribl-control-plane/models";

let value: ScanMode = "detailed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"detailed" | "quick" | Unrecognized<string>
```