-- RDS / PostgreSQL: fix "User was denied access on the database `YOUR_DB`"
-- Replace YOUR_DB and YOUR_APP_USER, run as a user that can grant (e.g. RDS master).

-- Block A — run while connected to the `postgres` maintenance DB (or any DB you can connect to):
GRANT CONNECT ON DATABASE YOUR_DB TO YOUR_APP_USER;

-- Block B — connect to YOUR_DB (in psql: \c YOUR_DB), then run:
GRANT USAGE ON SCHEMA public TO YOUR_APP_USER;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO YOUR_APP_USER;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO YOUR_APP_USER;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO YOUR_APP_USER;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO YOUR_APP_USER;

-- If Prisma migrate runs as YOUR_APP_USER, you may also need:
-- GRANT CREATE ON SCHEMA public TO YOUR_APP_USER;
