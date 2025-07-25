# DiskSpaceProtectionSecurityLake

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { DiskSpaceProtectionSecurityLake } from "cribl-control-plane/models/operations";

let value: DiskSpaceProtectionSecurityLake = "drop";
```

## Values

```typescript
"block" | "drop"
```