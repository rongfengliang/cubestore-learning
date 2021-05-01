// Cube.js configuration options: https://cube.dev/docs/config
const PostgresDriver = require('@cubejs-backend/postgres-driver');

module.exports = {
    driverFactory: ({ dataSource }) => {
        return new PostgresDriver({
            readOnly: true
        })

    }
};
