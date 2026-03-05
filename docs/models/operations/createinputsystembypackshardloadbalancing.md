# CreateInputSystemByPackShardLoadBalancing

The load-balancing algorithm to use for spreading out shards across Workers and Worker Processes

## Example Usage

```typescript
import { CreateInputSystemByPackShardLoadBalancing } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackShardLoadBalancing = "RoundRobin";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ConsistentHashing" | "RoundRobin" | Unrecognized<string>
```