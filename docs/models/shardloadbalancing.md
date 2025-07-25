# ShardLoadBalancing

The load-balancing algorithm to use for spreading out shards across Workers and Worker Processes

## Example Usage

```typescript
import { ShardLoadBalancing } from "cribl-control-plane/models";

let value: ShardLoadBalancing = "RoundRobin";
```

## Values

```typescript
"ConsistentHashing" | "RoundRobin"
```