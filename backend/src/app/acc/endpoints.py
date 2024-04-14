import logging

from fastapi import FastAPI, Request, APIRouter, Depends, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import asyncio

from pydantic import BaseModel

import json
from datetime import datetime
from decimal import Decimal


from ..dependencies import get_connection


router = APIRouter(prefix="/npo_account", tags=["npo_account"])


@router.get('/')
async def get_latest(npo_account_id : str, conn = Depends(get_connection)):
    acc_data = await conn.fetch(
        f"""
        SELECT * FROM savingsaccountsdata WHERE npo_account_id = '{npo_account_id}';
        """
    )
    return acc_data

@router.get('/operation_data')
async def get_latest_operations(user_id : str, conn = Depends(get_connection)):
    acc_data = await conn.fetch(
        f"""
        SELECT * FROM Operations WHERE user_id = '{user_id}';
        """
    )
    # print(acc_data)
    operation_0 = sum(1 for item in acc_data if item["operation_type"] == 0)
    operation_1 = sum(1 for item in acc_data if item["operation_type"] == 1)
    return {
        'operation_0': operation_0,
        'operation_1': operation_1
        }
    # return acc_data