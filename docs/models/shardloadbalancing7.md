# ShardLoadBalancing7

The load-balancing algorithm to use for spreading out shards across Workers and Worker Processes

## Example Usage

```typescript
import { ShardLoadBalancing7 } from "cribl-control-plane/models";

let value: ShardLoadBalancing7 = "ConsistentHashing";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ConsistentHashing" | "RoundRobin" | Unrecognized<string>
```