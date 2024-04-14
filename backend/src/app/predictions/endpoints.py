import logging

from fastapi import FastAPI, Request, APIRouter, Depends, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import asyncio

import json
from datetime import datetime
from decimal import Decimal


from ..dependencies import get_connection


router = APIRouter(prefix="/predicts", tags=["predicts"])


@router.get('/')
async def get_pred(npo_account_id, conn = Depends(get_connection)):
    data = await conn.fetch(
        f"select * from predicts where npo_account_id = '{npo_account_id}';"
    )
    return data