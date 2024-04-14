from fastapi import APIRouter

from ..user.endpoints import router as user_router
from ..acc.endpoints import router as npo_router
from ..predictions.endpoints import router as pred_router

api_router = APIRouter(prefix="/api/v1")

api_router.include_router(user_router)
api_router.include_router(npo_router)
api_router.include_router(pred_router)