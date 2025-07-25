# DiscoveryTypePrometheus

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { DiscoveryTypePrometheus } from "cribl-control-plane/models/operations";

let value: DiscoveryTypePrometheus = "ec2";
```

## Values

```typescript
"static" | "dns" | "ec2"
```