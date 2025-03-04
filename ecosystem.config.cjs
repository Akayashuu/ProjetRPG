module.exports = {
    apps: [
        {
            exec_mode: "fork",
            name: "ProjetRPG",
            script: "./dist/index.js", // Your entry point
            instances: 1,
            autorestart: true,
            watch: true,
            time: true,
            log: "./logs/logs.log",
            error_file: "./logs/error.log",
            out_file: "./logs/out.log",
            combine_logs: true,
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production",
            },
            ignore_watch: ["node_modules", "logs", ".git", "src/generated"],
            watch_options: {
                followSymlinks: false,
                usePolling: true,
            },
        },
    ],
}
