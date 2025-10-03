# MasterWorkerEntryType

## Example Usage

```typescript
import { MasterWorkerEntryType } from "cribl-control-plane/models";

let value: MasterWorkerEntryType = "resp";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"info" | "req" | "resp" | Unrecognized<string>
```