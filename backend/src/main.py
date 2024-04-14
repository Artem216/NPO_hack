from contextlib import asynccontextmanager
from fastapi import FastAPI, Request, WebSocket, Depends, WebSocketDisconnect
import time
from  app.config import Config, cfg
from  app.dependencies.db import db
from app.dependencies import get_connection
import asyncpg

from fastapi.middleware.cors import CORSMiddleware

from app.api import api_router

from datetime import datetime

pg = None

cfg.postgres_db = "dev"



@asynccontextmanager
async def lifespan(app: FastAPI):
    pool = await db.create_pool()
    yield
    await pool.close()


app = FastAPI(
    lifespan=lifespan,
    name="tractor",
    description="API",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(api_router)



@app.get("/")
async def test(conn = Depends(get_connection)):
    values = await conn.fetch(
        """
SELECT * FROM Users;
    """
    )
    return values
