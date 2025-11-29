# CountedSystemSettings

## Example Usage

```typescript
import { CountedSystemSettings } from "cribl-control-plane/models";

let value: CountedSystemSettings = {
  count: 278127,
  items: [
    {
      api: {
        baseUrl: "https://crushing-intervention.net/",
        disableApiCache: false,
        disabled: false,
        headers: {
          "key": "<value>",
          "key1": "<value>",
        },
        host: "beloved-suv.net",
        idleSessionTTL: 8362.31,
        listenOnPort: false,
        loginRateLimit: "<value>",
        port: 3905.62,
        protocol: "<value>",
        scripts: true,
        sensitiveFields: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        ssl: {
          caPath: "<value>",
          certPath: "<value>",
          disabled: false,
          passphrase: "<value>",
          privKeyPath: "<value>",
        },
        ssoRateLimit: "<value>",
        workerRemoteAccess: false,
      },
      auth: {
        fallback: false,
        fallbackBadLogin: true,
        filterType: "<value>",
        host: "rundown-summer.info",
        port: 7523.03,
        ssl: false,
        type: "splunk",
      },
      backups: {
        backupPersistence: "<value>",
        backupsDirectory: "<value>",
      },
      customLogo: {
        enabled: true,
        logoDescription: "<value>",
        logoImage: "<value>",
      },
      distributed: {
        mode: "edge",
      },
      fips: true,
      git: {
        authType: "<value>",
        autoAction: "<value>",
        autoActionMessage: "<value>",
        autoActionSchedule: "<value>",
        branch: "<value>",
        commitDeploySingleAction: false,
        copilotAutoGitCommitMessages: true,
        defaultCommitMessage: "<value>",
        gitOps: "push",
        password: "6brH3inWpyfKI6O",
        remote: "<value>",
        sshKey: "<value>",
        strictHostKeyChecking: false,
        timeout: 9064.52,
        user: "Etha79",
      },
      jobLimits: {
        concurrentJobLimit: 3483.37,
        concurrentScheduledJobLimit: 5367.36,
        concurrentSystemJobLimit: 5853.34,
        concurrentSystemTaskLimit: 2427.17,
        concurrentTaskLimit: 7395.67,
        disableTasks: false,
        finishedJobArtifactsLimit: 5374.97,
        finishedTaskArtifactsLimit: 5191.29,
        jobArtifactsReaperPeriod: "<value>",
        jobTimeout: "<value>",
        maxTaskPerc: 3527.04,
        schedulingPolicy: "<value>",
        taskHeartbeatPeriod: 3428.83,
        taskManifestFlushPeriodMs: 6680.89,
        taskManifestMaxBufferSize: 2578.02,
        taskManifestReadBufferSize: "<value>",
        taskPollTimeoutMs: 9051.86,
      },
      limits: {
        cpuProfileTTL: "<value>",
        disableMetricsAccessorCache: true,
        edgeMetricsCustomExpression: "<value>",
        edgeMetricsMode: "minimal",
        edgeNodesCount: 8360.6,
        enableMetricsPersistence: false,
        enableWorkerPersistence: true,
        eventsMetadataSources: [
          "<value 1>",
        ],
        largeEventsThreshold: "<value>",
        lookupMaxSize: "<value>",
        lookupMaxTotalSize: "<value>",
        maxDimensionValueSize: 7892.1,
        maxMetrics: 3650.04,
        maxPQSize: "<value>",
        maxReconnectInterval: "<value>",
        metricsDirectory: "<value>",
        metricsDropList: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        metricsFieldsBlacklist: [
          "<value 1>",
        ],
        metricsGCPeriod: "<value>",
        metricsMaxCardinality: 7899.33,
        metricsMaxDiskSpace: "<value>",
        metricsNeverDropList: [],
        metricsWorkerIdBlacklist: [
          "<value 1>",
        ],
        minFreeSpace: "<value>",
        minReconnectInterval: "<value>",
        netFlowTemplateFlushInterval: 3454.03,
        randomReconnectInterval: "<value>",
        samples: {
          maxSize: "<value>",
        },
        workerMaxMetrics: 4073.2,
      },
      pii: {
        enablePiiDetection: true,
      },
      proxy: {
        useEnvVars: true,
      },
      redisCacheLimits: {
        clientTrackingMechanism: "<value>",
        enableServerAssist: false,
        keyTTLSecs: 8814.23,
        maxCacheSize: 3162.71,
        maxNumKeys: 3023.9,
        servicePeriodSecs: 4907.36,
      },
      redisLimits: {
        connections: {
          disabled: false,
          maxConnections: 9484.43,
        },
      },
      rollback: {
        rollbackEnabled: false,
        rollbackRetries: 8496.74,
        rollbackTimeout: 3039.97,
      },
      searchLimits: {
        compressObjectCacheArtifacts: true,
        fieldSummaryMaxFields: 8415.57,
        fieldSummaryMaxNestedDepth: 8570.16,
        maxConcurrentSearches: "<value>",
        maxExecutorsPerSearch: 2075.37,
        maxResultsPerSearch: 2506.23,
        maxSearchDuration: "<value>",
        searchHistoryMaxJobs: 9318.6,
        searchHistoryTTL: "<value>",
        searchQueueLength: "<value>",
        warmPoolSize: "auto",
        writeOnlyProviderSecrets: false,
      },
      servicesLimits: {
        connections: {
          memoryLimit: "<value>",
          procs: 9291.32,
        },
        metrics: {
          memoryLimit: "<value>",
          procs: "auto",
        },
        notifications: {
          memoryLimit: "<value>",
          procs: "auto",
        },
      },
      shutdown: {
        drainTimeout: 1275.01,
      },
      sni: {
        disableSNIRouting: false,
      },
      sockets: {
        directory: "/rescue",
      },
      support: {
        featureFlagOverrides: [
          {
            disabled: false,
            flagId: "<id>",
          },
        ],
      },
      system: {
        intercom: false,
        upgrade: "api",
      },
      tls: {},
      upgradeGroupSettings: {
        isRolling: true,
        quantity: 8257.32,
        retryCount: 9323.66,
        retryDelay: 1.27,
      },
      upgradeSettings: {},
      workers: {
        count: 8349.69,
        enableHeapSnapshots: false,
        loadThrottlePerc: 6678.5,
        memory: 782.67,
        minimum: 638.33,
        startupMaxConns: 4564.1,
        startupThrottleTimeout: 1068.48,
        v8SingleThread: true,
      },
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `count`                                                | *number*                                               | :heavy_minus_sign:                                     | number of items present in the items array             |
| `items`                                                | [models.SystemSettings](../models/systemsettings.md)[] | :heavy_minus_sign:                                     | N/A                                                    |