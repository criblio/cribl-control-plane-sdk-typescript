# OutputSecurityLakeDiskSpaceProtection

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { OutputSecurityLakeDiskSpaceProtection } from "cribl-control-plane/models";

let value: OutputSecurityLakeDiskSpaceProtection = "drop";
```

## Values

```typescript
"block" | "drop"
```