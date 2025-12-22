# SplunkCollectorConfAuthentication

Authentication method for Discover and Collect REST calls

## Example Usage

```typescript
import { SplunkCollectorConfAuthentication } from "cribl-control-plane/models";

let value: SplunkCollectorConfAuthentication = "tokenSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "basicSecret" | "token" | "tokenSecret" | Unrecognized<string>
```