from pydantic_settings import BaseSettings, SettingsConfigDict


class Config(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    domain: str = "localhost"
    server_host: str = "0.0.0.0"
    server_port: int = 8000

    postgres_user: str ="pguser"
    postgres_password: str ="pgpassword"
    postgres_host: str = "localhost"
    postgres_db: str = "dev"
    postgres_port: int = 5432
    @property
    def dsn(self) -> str:
        return f"postgres://{self.postgres_user}:{self.postgres_password}@{self.postgres_host}:{self.postgres_port}/{self.postgres_db}"


cfg = Config() # type: ignore