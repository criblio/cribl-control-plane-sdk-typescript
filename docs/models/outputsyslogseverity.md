# OutputSyslogSeverity

Default value for message severity. Will be overwritten by value of __severity if set. Defaults to notice.

## Example Usage

```typescript
import { OutputSyslogSeverity } from "cribl-control-plane/models";

let value: OutputSyslogSeverity = 2;
```

## Values

```typescript
0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
```