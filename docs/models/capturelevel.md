# CaptureLevel

Stage at which events are captured. <br><code>0</code> == Before pre-processing Pipeline <br><code>1</code> == Before the Routes <br><code>2</code> == Before post-processing Pipeline <br><code>3</code> == Before the Destination.

## Example Usage

```typescript
import { CaptureLevel } from "cribl-control-plane/models";

let value: CaptureLevel = 2;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

```typescript
0 | 1 | 2 | 3 | Unrecognized<number>
```