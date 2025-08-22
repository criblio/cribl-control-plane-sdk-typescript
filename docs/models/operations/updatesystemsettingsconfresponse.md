# UpdateSystemSettingsConfResponse

a list of SystemSettings objects

## Example Usage

```typescript
import { UpdateSystemSettingsConfResponse } from "cribl-control-plane/models/operations";

let value: UpdateSystemSettingsConfResponse = {
  count: 271365,
  items: [
    {
      api: {
        baseUrl: "https://mad-cross-contamination.name",
        disableApiCache: true,
        disabled: true,
        headers: {},
        host: "free-place.info",
        idleSessionTTL: 7877.98,
        listenOnPort: false,
        loginRateLimit: "<value>",
        port: 1901.03,
        protocol: "<value>",
        scripts: false,
        sensitiveFields: [
          "<value 1>",
          "<value 2>",
        ],
        ssl: {
          caPath: "<value>",
          certPath: "<value>",
          disabled: true,
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
        host: "wry-replacement.com",
        port: 3551.15,
        ssl: false,
        type: "ldap",
      },
      backups: {
        backupPersistence: "<value>",
        backupsDirectory: "<value>",
      },
      customLogo: {
        enabled: false,
        logoDescription: "<value>",
        logoImage: "<value>",
      },
      distributed: {
        mode: "worker",
      },
      fips: true,
      git: {
        authType: "<value>",
        autoAction: "<value>",
        autoActionMessage: "<value>",
        autoActionSchedule: "<value>",
        branch: "<value>",
        commitDeploySingleAction: false,
        copilotAutoGitCommitMessages: false,
        defaultCommitMessage: "<value>",
        gitOps: "push",
        password: "i7wb6JYYXPMNBVu",
        remote: "<value>",
        sshKey: "<value>",
        strictHostKeyChecking: true,
        timeout: 6855.1,
        user: "Hardy61",
      },
      jobLimits: {
        concurrentJobLimit: 9564.68,
        concurrentScheduledJobLimit: 4589.83,
        concurrentSystemJobLimit: 5125.05,
        concurrentSystemTaskLimit: 712.74,
        concurrentTaskLimit: 7460.61,
        disableTasks: false,
        finishedJobArtifactsLimit: 5863.16,
        finishedTaskArtifactsLimit: 4454.75,
        jobArtifactsReaperPeriod: "<value>",
        jobTimeout: "<value>",
        maxTaskPerc: 5226.41,
        schedulingPolicy: "<value>",
        taskHeartbeatPeriod: 3776.64,
        taskManifestFlushPeriodMs: 8344.05,
        taskManifestMaxBufferSize: 6049.94,
        taskManifestReadBufferSize: "<value>",
        taskPollTimeoutMs: 2201.28,
      },
      limits: {
        cpuProfileTTL: "<value>",
        disableMetricsAccessorCache: true,
        edgeMetricsCustomExpression: "<value>",
        edgeMetricsMode: "minimal",
        edgeNodesCount: 4963.9,
        enableMetricsPersistence: false,
        enableWorkerPersistence: true,
        eventsMetadataSources: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        largeEventsThreshold: "<value>",
        lookupMaxSize: "<value>",
        lookupMaxTotalSize: "<value>",
        maxMetrics: 304.56,
        maxPQSize: "<value>",
        metricsDirectory: "<value>",
        metricsDropList: [
          "<value 1>",
          "<value 2>",
        ],
        metricsFieldsBlacklist: [
          "<value 1>",
          "<value 2>",
        ],
        metricsGCPeriod: "<value>",
        metricsMaxCardinality: 3570.94,
        metricsMaxDiskSpace: "<value>",
        metricsNeverDropList: [
          "<value 1>",
        ],
        metricsWorkerIdBlacklist: [],
        minFreeSpace: "<value>",
        samples: {
          maxSize: "<value>",
        },
        workerMaxMetrics: 6936.69,
      },
      pii: {
        enablePiiDetection: true,
      },
      proxy: {
        useEnvVars: true,
      },
      redisCacheLimits: {
        clientTrackingMechanism: "<value>",
        enableServerAssist: true,
        keyTTLSecs: 693.88,
        maxCacheSize: 8896.19,
        maxNumKeys: 7754.39,
        servicePeriodSecs: 6925.9,
      },
      redisLimits: {
        connections: {
          disabled: false,
          maxConnections: 2366.89,
        },
      },
      rollback: {
        rollbackEnabled: false,
        rollbackRetries: 3713.93,
        rollbackTimeout: 2660.43,
      },
      searchLimits: {
        compressObjectCacheArtifacts: true,
        fieldSummaryMaxFields: 5784.63,
        fieldSummaryMaxNestedDepth: 3358.59,
        maxConcurrentSearches: 9926.76,
        maxExecutorsPerSearch: 1462.89,
        maxResultsPerSearch: 7186.93,
        searchHistoryMaxJobs: 3283.98,
        searchQueueLength: 9024.3,
        warmPoolSize: "auto",
        writeOnlyProviderSecrets: false,
      },
      servicesLimits: {
        connections: {
          memoryLimit: "<value>",
        },
        metrics: {
          memoryLimit: "<value>",
        },
        notifications: {
          memoryLimit: "<value>",
        },
      },
      shutdown: {
        drainTimeout: 5662.16,
      },
      sni: {
        disableSNIRouting: true,
      },
      sockets: {
        directory: "/opt/include",
      },
      system: {
        intercom: false,
        upgrade: "false",
      },
      tls: {
        defaultCipherList: "<value>",
        defaultEcdhCurve: "<value>",
        maxVersion: "<value>",
        minVersion: "<value>",
        rejectUnauthorized: false,
      },
      upgradeGroupSettings: {
        isRolling: true,
        quantity: 7484.9,
        retryCount: 6229.05,
        retryDelay: 3496.92,
      },
      upgradeSettings: {
        automaticUpgradeCheckPeriod: "<value>",
        disableAutomaticUpgrade: true,
        enableLegacyEdgeUpgrade: false,
        packageUrls: [
          {
            packageHashUrl: "https://exotic-lashes.net/",
            packageUrl: "https://hard-to-find-video.org",
          },
        ],
        upgradeSource: "<value>",
      },
      workers: {
        count: 3950.26,
        enableHeapSnapshots: false,
        loadThrottlePerc: 4664.05,
        memory: 3576.42,
        minimum: 3016.08,
        startupMaxConns: 1473.02,
        startupThrottleTimeout: 2098.29,
        v8SingleThread: false,
      },
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `count`                                                   | *number*                                                  | :heavy_minus_sign:                                        | number of items present in the items array                |
| `items`                                                   | [models.SystemSettings](../../models/systemsettings.md)[] | :heavy_minus_sign:                                        | N/A                                                       |