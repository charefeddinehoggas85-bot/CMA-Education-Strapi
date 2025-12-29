export default ({ env }: { env: any }) => {
  // Configuration pour Railway avec DATABASE_URL
  if (env('DATABASE_URL')) {
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          ssl: {
            rejectUnauthorized: false
          }
        },
        pool: {
          min: 2,
          max: 10,
        },
        acquireConnectionTimeout: 60000,
      },
    };
  }

  // Configuration locale avec variables individuelles
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'cma_cms'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'root'),
        ssl: false,
      },
      pool: {
        min: 2,
        max: 10,
      },
      acquireConnectionTimeout: 60000,
    },
  };
};
