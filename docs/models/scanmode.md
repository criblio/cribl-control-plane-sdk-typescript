# ScanMode

Acceleration scan mode. <code>quick</code> collects object-level metadata; <code>detailed</code> also collects field-level statistics.

## Example Usage

```typescript
import { ScanMode } from "cribl-control-plane/models";

let value: ScanMode = "detailed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"detailed" | "quick" | Unrecognized<string>
```