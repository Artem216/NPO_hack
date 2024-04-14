import logging

from fastapi import FastAPI, Request, APIRouter, Depends, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import asyncio

from pydantic import BaseModel

import json
from datetime import datetime
from decimal import Decimal


from ..dependencies import get_connection


router = APIRouter(prefix="/user", tags=["user_data"])


class User(BaseModel):
    user_id: str
    gender: str
    age: str

async def get_user_data(user_id: str, conn):
    user_data = await conn.fetch(
        f"""
        SELECT * FROM Users WHERE user_id = {user_id};
        """)

    user = User(user_id=user_data[0], gender=user_data[1], age=user_data[2])
    return user

@router.get('/get_user')
async def get_user_data(user_id : str,conn = Depends(get_connection)):
    print(user_id)
    user_data = await conn.fetch(
        f"""
        select * from users where user_id = '{user_id}';
        """)
    users_acc = await conn.fetch(
        f"""
        SELECT * FROM savingsaccounts WHERE user_id = '{user_id}';
        """
    )
    data = {
        'user': user_data,
        'acc' : users_acc,
    }
    return data