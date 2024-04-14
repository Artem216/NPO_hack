import asyncio
import asyncpg
from dotenv import load_dotenv
import os
from ..config import Config, cfg



class DB:
    def __init__(self, cfg: Config) -> None:
        self.__cfg = cfg

    async def create_pool(self) -> asyncpg.Pool:
        pool = await asyncpg.pool.create_pool(dsn=self.__cfg.dsn)
        if pool is None:
            raise Exception("can't connect to postgresql")
        self.pool = pool
        return pool


async def run(cfg: Config):
    conn = await asyncpg.connect(
        user=cfg.postgres_user,
        password=cfg.postgres_password,
        database=cfg.postgres_db,
        host=cfg.postgres_host,
    )
    values = await conn.fetch(
        """
SELECT time_bucket('1 hour', time) AS bucket,
    first(price,time),
    last(price, time)
FROM stocks_real_time srt
WHERE time > now() - INTERVAL '2 days'
GROUP BY bucket;
"""
    )
    for v in values:
        print(v)

    await conn.close()

db = DB(cfg)


# async def get_connection():
#     async with db.pool.acquire() as conn:    
#         yield conn
#     print("conn closed") 

async def get_connection():
    return db.pool


# if __name__ == "__main__":
#     config = Config()  # type: ignore
#     print(config)
#     config.postgres_db = "dev"
#     loop = asyncio.get_event_loop()
#     loop.run_until_complete(run(config))
