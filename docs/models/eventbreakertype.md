# EventBreakerType

## Example Usage

```typescript
import { EventBreakerType } from "cribl-control-plane/models";

let value: EventBreakerType = "regex";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"regex" | "json" | "json_array" | "header" | "timestamp" | "csv" | "aws_cloudtrail" | "aws_vpcflow" | Unrecognized<string>
```